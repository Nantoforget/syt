import axios, { AxiosHeaders } from "axios";

import { getToken } from "@/utils/index.ts";
import { ElMessage } from "element-plus";

const http = axios.create({
  baseURL: "/api",
  timeout: 5000
});

//请求拦截器
http.interceptors.request.use(
  (config) => {
    let token = getToken();
    if (token) {
      token = token.replace('"', "").replace('"', "");
      // config.headers.Authorization = `Bearer ${token}`;
      (config.headers as AxiosHeaders)["Token"] = token;
    }
    // console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response.data;
  },
  (error) => {
    console.log(error);
    let status = error.response.status;
    switch (status) {
      case 404:
        ElMessage({
          type: "error",
          message: "请求失败，路径出现问题"
        });
        break;
    }
    return Promise.reject(error);
  }
);

export default http;
