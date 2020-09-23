import { FilterOptions } from '@app/store/types';

const BASE_URL = 'https://kitsu.io/api/edge';

const HEADERS = {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
};

const api = {
    baseURL: BASE_URL,
    headers: HEADERS,
    endpoints: {
        getAnime: (filters: FilterOptions) => {
            let params = {
                sort: `${filters.sort}`,
                'page[limit]': filters.limit,
                'page[offset]': filters.offset
            }
            return { url: '/anime', params }
        },
        getManga: (filters: FilterOptions) => {
            let params = {
                sort: `${filters.sort}`,
                'page[limit]': filters.limit,
                'page[offset]': filters.offset
            }
            return { url: '/manga', params }
        },
    }
}

export default api;
