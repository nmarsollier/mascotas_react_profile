import axios from "axios";
import { environment } from "mascotas_react_common";

axios.defaults.headers.common["Content-Type"] = "application/json";

interface Profile {
    name: string;
    phone: string;
    email: string;
    address: string;
    province: string;
    picture: string;
}

interface UpdateBasicProfile {
    name: string;
    phone: string;
    email: string;
    address: string;
    province: string;
}

export async function updateBasicInfo(data: UpdateBasicProfile): Promise<Profile> {
    try {
        const res = await axios.post(environment.backendUrl + "/v1/profile", data);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

interface UpdateProfileImage {
    image: string;
}
interface UpdateProfileImageId {
    id: string;
}

export async function updateProfilePicture(payload: UpdateProfileImage): Promise<UpdateProfileImageId> {
    try {
        const res = await axios.post(environment.backendUrl + "/v1/profile/picture", payload);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export async function getCurrentProfile(): Promise<Profile> {
    try {
        const res = await axios.get(environment.backendUrl + "/v1/profile");
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export function getPictureUrl(id: string) {
    if (id && id.length > 0) {
        return environment.backendUrl + "/v1/image/" + id;
    } else {
        return "/assets/profile.png";
    }
}
