// const QUERY_LINK_OFFSET = 0;
const SERVER_URL = import.meta.env.VITE_BACKEND_URL ?? '';
export class HttpService {
    fetchingService;
    baseUrl;
    constructor(fetchingService, baseUrl = SERVER_URL) {
        this.fetchingService = fetchingService;
        this.baseUrl = baseUrl;
        this.fetchingService = fetchingService;
        this.baseUrl = baseUrl;
    }
    createQueryLink(base, args) {
        let url = `${base}?`;
        Object.keys(args).forEach((parameter) => {
            if (typeof args[parameter] !== 'undefined') {
                url = `${url}&${parameter}=${String(args[parameter])}`;
            }
        });
        return url;
    }
    async get(url, config) {
        return this.fetchingService
            .get(this.getFullApiUrl(url), {
            ...config,
            headers: {
                ...config?.headers,
                ...this.populateContentTypeHeaderConfig(),
            },
        })
            .then((result) => {
            this.checkResponseStatus(result);
            return result.data;
        });
    }
    async post(url, data, config) {
        return this.fetchingService
            .post(this.getFullApiUrl(url), data, {
            ...config,
            headers: {
                ...config?.headers,
                ...this.populateContentTypeHeaderConfig(),
            },
        })
            .then((result) => {
            this.checkResponseStatus(result);
            return result.data;
        });
    }
    async put(url, data, config) {
        return this.fetchingService
            .put(this.getFullApiUrl(url), data, {
            ...config,
            headers: {
                ...config?.headers,
                ...this.populateContentTypeHeaderConfig(),
            },
        })
            .then((result) => {
            this.checkResponseStatus(result);
            return result.data;
        });
    }
    async patch(url, data, config) {
        return this.fetchingService
            .patch(this.getFullApiUrl(url), data, {
            ...config,
            headers: {
                ...config?.headers,
                ...this.populateContentTypeHeaderConfig(),
            },
        })
            .then((result) => {
            this.checkResponseStatus(result);
            return result.data;
        });
    }
    async delete(url, config) {
        return this.fetchingService
            .delete(this.getFullApiUrl(url), {
            ...config,
            headers: {
                ...config?.headers,
                ...this.populateContentTypeHeaderConfig(),
            },
        })
            .then((result) => {
            this.checkResponseStatus(result);
            return result.data;
        });
    }
    populateContentTypeHeaderConfig() {
        return {
            'Content-Type': 'application/json',
        };
    }
    getFullApiUrl(url) {
        return `${this.baseUrl}/${url}`;
    }
    async checkResponseStatus(result) {
        if (result.status >= 400 && result.status < 600) {
            const errorData = {
                response: {
                    status: result.status,
                    data: result.data,
                },
            };
            throw new Error(JSON.stringify(errorData));
        }
    }
}
