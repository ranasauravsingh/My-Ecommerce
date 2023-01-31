import { environment } from "../environments/environment";

export class ConfigService {
	static BASE_URL = environment.backendUrl;
	static BASE_URL_PRODUCT = "productModel/";
}
