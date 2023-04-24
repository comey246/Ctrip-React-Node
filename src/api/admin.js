import http from "@/api/index.js";

export const getUsersMap = () => {
    return http.get(`/admin/user/map`,{});
};

export const getUser = (params) => {
    return http.get(`/admin/user`,params);
};
