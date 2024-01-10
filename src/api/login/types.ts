// login/types.ts
// 登录参数类型
export interface LoginState{
  username:string;
  password:string;
  code:string
}
// 拿到的用户数据类型定义
export interface UserInfoState{
  user:string;
  ID:string;
  age:string | number ;
  sex:string
}