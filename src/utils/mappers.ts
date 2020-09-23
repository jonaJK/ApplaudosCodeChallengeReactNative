import { SectionItem, NormalizedAnime, NormalizedManga } from '@app/store/types';

export const mapSectionItem = (anime: NormalizedAnime): SectionItem => ({
    id: anime.id,
    canonicalTitle: anime.attributes.canonicalTitle,
    posterImage: anime.attributes.posterImage.small,
});

export const mapMangaSectionItem = (manga: NormalizedManga): SectionItem => ({
    id: manga.id,
    canonicalTitle: manga.attributes.canonicalTitle,
    posterImage: manga.attributes.posterImage.small,
});