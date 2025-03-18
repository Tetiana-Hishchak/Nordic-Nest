export class EnhancedWithAuthHttpService {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
        this.httpService = httpService;
    }
    createQueryLink(base, parameters) {
        return this.httpService.createQueryLink(base, parameters);
    }
    async get(url, config = {}) {
        return this.httpService.get(url, await this.attachAuthHeader(config));
    }
    async post(url, data, config = {}) {
        return this.httpService.post(url, data, await this.attachAuthHeader(config));
    }
    async put(url, data, config = {}) {
        return this.httpService.put(url, data, await this.attachAuthHeader(config));
    }
    async patch(url, data, config = {}) {
        return this.httpService.patch(url, data, await this.attachAuthHeader(config));
    }
    async delete(url, config = {}) {
        return this.httpService.delete(url, await this.attachAuthHeader(config));
    }
    async attachAuthHeader(config) {
        return {
            ...config,
            headers: {
                ...config.headers,
            },
        };
    }
}
