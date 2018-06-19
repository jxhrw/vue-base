import axios from 'axios';
const base = '/api';
let api = axios.create({
	headers : {
		'Content-Type' : 'application/x-www-form-urlencoded'
	}
})

//获取列表
export const projectList = parms => { return api.get(`${base}/search/h5/query?data=${parms}`) };