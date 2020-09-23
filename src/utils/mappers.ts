import { SectionItem, NormalizedAnime } from '@app/store/types';

export const mapSectionItem = (anime: NormalizedAnime): SectionItem => ({
    id: anime.id,
    canonicalTitle: anime.attributes.canonicalTitle,
    posterImage: anime.attributes.posterImage.small,
});
