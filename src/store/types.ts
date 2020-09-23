export type Image = {
    tiny: string,
    small: string;
    large: string;
    original: string;
    meta: {
        dimensions: {
            tiny: {
                width: number;
                height: number
            };
            small: {
                width: number;
                height: number
            };
            large: {
                width: number;
                height: number
            };
        };
    };
}

export type Status = 'current' | 'finished' | 'tba' | 'unreleased' | 'upcoming';

export type AnimeType = 'ONA' | 'OVA' | 'TV' | 'movie' | 'music' | 'special';

export type Anime = {
    canonicalTitle: string;
    subtype: AnimeType;
    episodeCount: number;
    startDate: string;
    endDate: string;
    averageRating: string;
    ageRating: string;
    episodeLength: number;
    status: Status;
    posterImage: Image;
    synopsis: string;
    ratingRank: number;
}

export type NormalizedAnimeResponse<T> = {
    id: string;
    attributes: T;
};

export type NormalizedAnime = NormalizedAnimeResponse<Anime>;

export type NormalizedState<T> = {
    anime: { [key: string]: T };
    ids: string[];
    selectedId: string;
    status: RequestStatus;
    error: string | null
}

export type NormalizedAnimeDocument = NormalizedJsonApiDocument<
    NormalizedAnime,
    'anime'
>;

export type NormalizedJsonApiDocument<T, K extends string> = {
    [type in K]: { [key: string]: T };
};

// Components Types

export type SectionItem = {
    id: string;
    canonicalTitle: string;
    posterImage: string;
};

export type onPressParam = {
    id: string;
}

// API Types

export type RequestStatus = 'loading' | 'succeeded' | 'failed';

export type FilterOptions = {
    sort: string;
    limit: number;
    offset: number;
}