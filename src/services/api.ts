import axios from 'axios'

const hostname = () => {
    const app = window.location.hostname

    if(app === 'dev-escola.vercel.app'){
        return 'https://dev-escola.vercel.app/api'
    }

    return 'http://locahost:3000/api'
}

const api = axios.create({
    baseURL: hostname()
})

export default api