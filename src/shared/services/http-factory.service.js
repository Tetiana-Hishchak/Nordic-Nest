import { EnhancedWithAuthHttpService } from './http-auth.service';
import { HttpService } from './http.service';
import { mainAxios } from './mainAxios';
export class HttpFactoryService {
    createHttpService() {
        return new HttpService(mainAxios);
    }
    createAuthHttpService() {
        return new EnhancedWithAuthHttpService(this.createHttpService());
    }
}
