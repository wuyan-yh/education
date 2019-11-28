import request from "./request"; //引入axios的封装方法
let api = "http://www.wyunfei.com:8002/apis";
export const list = params => {
  return request("post", api + "/user/pc/api/user/login/password", params); //登陆管理员获取自身信息
};
export const navlist = params => {
  return request("post", api + "system/pc/menu/user/list", params); //登陆管理员获取自身信息
};

// export const register = params => {
//   return request("post", "/api/v1.0/admin/register", params); //添加管理员
// };

// export const deleteAdmin = (id, params) => {
//   return request("delete", `/api/v1.0/admin/${id}`, params); //更新管理员信息
// };
