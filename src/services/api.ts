import axios from 'axios'

// const hostname = () => {
//   const app = window.location.hostname

//   if (app === 'dev-escola.vercel.app') {
//     return 'https://dev-escola.vercel.app/api'
//   }

//   return 'http://localhost:3000/api'
// }

const api = axios.create({
  baseURL:'http://localhost:3000/api'
})

export default api