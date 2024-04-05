/**
 * 获取本地token
 */
const getToken = () => {
  return localStorage.getItem("TOKEN");
};
/**
 * 设置token
 * @param token token字段
 */
const setToken = (token: string) => {
  localStorage.setItem("TOKEN", token);
};
/**
 * 清除本地token
 */
const removeToken = () => {
  localStorage.removeItem("TOKEN");
};

export default { getToken, setToken, removeToken };
