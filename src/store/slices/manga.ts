import axios from 'axios';
import { createSlice, PayloadAction, createSelector, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '@app/store/config';
import { NormalizedMangaState, NormalizedMangaDocument, NormalizedManga } from '@app/store/types';
// @ts-ignore
import normalize from 'json-api-normalizer';
import api from '@app/config/index';

const initialState: NormalizedMangaState<NormalizedManga> = {
    manga: {},
    ids: [],
    selectedId: '',
    status: 'loading',
    error: null
}

const slice = createSlice({
    name: 'manga',
    initialState,
    reducers: {
        clear: () => ({ ...initialState }),
        getMangaSuccess: (state, action: PayloadAction<NormalizedMangaDocument>) => {
            state.status = 'succeeded';
            state.manga = action.payload.manga;
            state.ids = Object.keys(action.payload.manga);
        },
        getMangaError: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        selectManga: (state, action: PayloadAction<string>) => {
            state.selectedId = action.payload;
        }
    }
});

export const { getMangaSuccess, getMangaError, selectManga } = slice.actions;

export const getMangas = (state: RootState) => state.listManga.manga;
export const getMangasID = (state: RootState) => state.listManga.ids;
export const getMangaRequestStatus = (state: RootState) => state.listManga.status;
export const getHighestRatedMangaList = createSelector(
    getMangas,
    getMangasID,
    (manga, ids) =>
        Object.keys(manga).length === 0
            ? []
            : [...ids]
                .filter((id) => manga[id])
                .sort((a, b) =>
                    manga[a].attributes.ratingRank > manga[b].attributes.ratingRank ? 1 : -1
                )
                .map((id) => manga[id])
);

export const getSelectedId = (state: RootState) => state.listManga.selectedId || '';
export const getSelectedManga = createSelector(
    getMangas,
    getSelectedId,
    (manga, selectedId) => manga[selectedId]
);

export default slice.reducer;

export const fetchHighestRatedManga = async (dispatch: Dispatch) => {

    try {
        const response = await axios.request({
            baseURL: api.baseURL,
            headers: api.headers,
            method: 'GET',
            ...api.endpoints.getManga({ sort: 'ratingRank', limit: 10, offset: 0 })
        });

        if (response.headers['content-type'] === 'application/vnd.api+json') {
            response.data = normalize(response.data);
        }
        dispatch(getMangaSuccess(response.data));
    } catch (err) {
        dispatch(getMangaError(err));
    }
}