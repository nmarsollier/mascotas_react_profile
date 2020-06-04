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
export declare function updateBasicInfo(data: UpdateBasicProfile): Promise<Profile>;
interface UpdateProfileImage {
    image: string;
}
interface UpdateProfileImageId {
    id: string;
}
export declare function updateProfilePicture(payload: UpdateProfileImage): Promise<UpdateProfileImageId>;
export declare function getCurrentProfile(): Promise<Profile>;
export declare function getPictureUrl(id: string): string;
export {};
