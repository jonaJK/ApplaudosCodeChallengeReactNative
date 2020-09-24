import axios from 'axios';
import { createSlice, PayloadAction, createSelector, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '@app/store/config';
import { NormalizedState, NormalizedAnimeDocument, NormalizedAnime, AnimeGenres } from '@app/store/types';
// @ts-ignore
import normalize from 'json-api-normalizer';
import api from '@app/config/index';

const initialState: NormalizedState<NormalizedAnime> = {
    anime: {},
    ids: [],
    selectedId: '',
    status: 'loading',
    error: null
}

const slice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
        clear: () => ({ ...initialState }),
        getAnimeSuccess: (state, action: PayloadAction<NormalizedAnimeDocument>) => {
            state.status = 'succeeded';
            state.anime = action.payload.anime;
            state.ids = Object.keys(action.payload.anime);
        },
        getAnimeError: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        setGenres: (state, action: PayloadAction<AnimeGenres>) => {
            state.anime[action.payload.id].attributes.genres = action.payload.list;
        },
        selectAnime: (state, action: PayloadAction<string>) => {
            state.selectedId = action.payload;
        }
    }
});

export const { getAnimeSuccess, getAnimeError, setGenres, selectAnime } = slice.actions;

export const getAnimes = (state: RootState) => state.list.anime;
export const getAnimesID = (state: RootState) => state.list.ids;
export const getAnimeRequestStatus = (state: RootState) => state.list.status;
export const getHighestRatedAnimeList = createSelector(
    getAnimes,
    getAnimesID,
    (anime, ids) =>
        Object.keys(anime).length === 0
            ? []
            : [...ids]
                .filter((id) => anime[id])
                .sort((a, b) =>
                    anime[a].attributes.ratingRank > anime[b].attributes.ratingRank ? 1 : -1
                )
                .map((id) => anime[id])
);

export const getSelectedId = (state: RootState) => state.list.selectedId || '';
export const getSelectedAnime = createSelector(
    getAnimes,
    getSelectedId,
    (anime, selectedId) => anime[selectedId]
);

export default slice.reducer;

export const fetchHighestRatedAnime = async (dispatch: Dispatch) => {

    try {
        const response = await axios.request({
            baseURL: api.baseURL,
            headers: api.headers,
            method: 'GET',
            ...api.endpoints.getAnime({ sort: 'ratingRank', limit: 10, offset: 0 })
        });

        if (response.headers['content-type'] === 'application/vnd.api+json') {
            response.data = normalize(response.data);
        }

        dispatch(getAnimeSuccess(response.data));

    } catch (err) {
        dispatch(getAnimeError(err));
    }
}

export const fetchAnimeGenres = (id: string, url: string) => async (dispatch: Dispatch) => {

    try {
        const response = await axios.request({
            url: url,
            headers: api.headers,
            method: 'GET',
        });

        if (response.headers['content-type'] === 'application/vnd.api+json') {
            response.data = normalize(response.data);
        }

        let genres: string[] = [];
        const genresObj = response.data.genres;
        Object.keys(response.data.genres)
            .map(item => genres.push(genresObj[item].attributes.name))

        dispatch(setGenres({ id, list: genres }));
    } catch (err) { }
}
