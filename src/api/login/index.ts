// login/index.ts
import request from '@/utils/request';
import { objectToFormData } from "@/utils/formDataFormat";// post请求参数是form-data时，使用此方法处理数据
import { LoginState } from './types';

/**
 * 登录api接口集合
 * @method signIn 用户登录
 * @method signOut 用户退出登录
 */
export function UseLoginApi() {
	return {
		login: (params: LoginState) => {
			return request({
				url: '/login',
				method: 'post',
				data: objectToFormData(params),
			});
		},
		// logout: (params: object) => {
		// 	return request({
		// 		url: '/logout',
		// 		method: 'post',
		// 		data: objectToFormData(params),
		// 	});
		// },
	};
}
