import axios from 'axios'

// api 存放在 .env.development.local 文件中, 每一行为一个变量, 开头均为 REACT_APP_, process.env 读取环境变量
const api = process.env.REACT_APP_RECORDS_API_URL || 'http://localhost:3001'

export const getAll = () => axios.get(`${api}/api/v1/records`)

export const create = body => axios.post(`${api}/api/v1/records`, body)

export const update = (id, body) => axios.put(`${api}/api/v1/records/${id}`, body)

export const remove = id => axios.delete(`${api}/api/v1/records/${id}`)