import axios from 'axios'

const axiosIns = axios.create({
    baseURL: 'https://v3.tissini.app/api/v3',
})

export default axiosIns
