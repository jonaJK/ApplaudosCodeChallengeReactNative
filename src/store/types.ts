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

export type linksType = {
    self: string;
    related: string;
}

export type Links = {
    links: linksType;
}

export type Relationships = {
    genres: Links;
}

// Anime

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
    youtubeVideoId: string;
    genres: string[];
}

export type NormalizedAnimeResponse<T> = {
    id: string;
    attributes: T;
    relationships: Relationships;
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

export type AnimeGenres = {
    id: string;
    list: string[];
}

// Manga

export type MangaType = 'doujin' | 'manga' | 'manhua' | 'manhwa' | 'novel' | 'oel' | 'oneshot';

export type Manga = {
    canonicalTitle: string;
    startDate: string;
    endDate: string;
    ratingRank: number;
    popularityRank: number;
    ageRating: string;
    ageRatingGuide: String;
    subtype: MangaType;
    averageRating: string;
    synopsis: string;
    posterImage: Image;
    chapterCount: number;
    volumeCount: number;
    serialization: string;
    status: Status;
}

export type NormalizedMangaResponse<T> = {
    id: string;
    attributes: T;
};

export type NormalizedManga = NormalizedMangaResponse<Manga>;

export type NormalizedMangaState<T> = {
    manga: { [key: string]: T };
    ids: string[];
    selectedId: string;
    status: RequestStatus;
    error: string | null
}

export type NormalizedMangaDocument = NormalizedJsonApiDocument<
    NormalizedManga,
    'manga'
>;

// Components Types

export type SectionItem = {
    id: string;
    canonicalTitle: string;
    posterImage: string;
};

export type onPressParam = {
    id: string;
    type: string;
}

// API Types

export type RequestStatus = 'loading' | 'succeeded' | 'failed';

export type FilterOptions = {
    sort: string;
    limit: number;
    offset: number;
}
