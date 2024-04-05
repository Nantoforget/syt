import TOKEN from "./token.ts";
import http from "./request.ts";

const { getToken, setToken, removeToken } = TOKEN;

export { getToken, setToken, removeToken, http as request };
