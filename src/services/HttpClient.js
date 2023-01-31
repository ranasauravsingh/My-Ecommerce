import axios from "axios";
import { environment } from "../environments/environment";

export default axios.create({
	baseURL: environment.backendUrl,
	headers: {
		"Content-type": "application/json",
	},
});
