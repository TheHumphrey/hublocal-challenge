import axios from 'axios'

export const hublocalApi = axios.create({
  baseURL: 'http://localhost:3333/'
})