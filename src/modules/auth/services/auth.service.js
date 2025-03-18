import { HttpFactoryService } from '~shared/services/http-factory.service';
export class AuthService {
    static authHttpService = new HttpFactoryService().createAuthHttpService();
    static async login(email, password) {
        const data = { email, password };
        return this.authHttpService.post('auth/admin/signin', data);
    }
    static async refreshTokens(refreshToken) {
        const config = {
            headers: {
                Authorization: `Bearer ${refreshToken}`,
            },
        };
        return this.authHttpService.get('auth/refresh', config);
    }
    static async logout(accessToken) {
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        return this.authHttpService.get('auth/logout', config);
    }
}
export default AuthService;
