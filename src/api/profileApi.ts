import { environment } from "mascotas_react_common";
import { securedAxios } from "mascotas_react_store";

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
        const res = await securedAxios().post(environment.backendUrl + "/v1/profile", data);
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
        const res = await securedAxios().post(environment.backendUrl + "/v1/profile/picture", payload);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export async function getCurrentProfile(): Promise<Profile> {
    try {
        const res = await securedAxios().get(environment.backendUrl + "/v1/profile");
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
