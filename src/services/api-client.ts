import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '851002e7e1354540bd3e4dc1eea1f7bc'
    }
})