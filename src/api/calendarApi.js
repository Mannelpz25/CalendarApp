/* ---------- Ayuda!! ----------
*    Conexion API
*/
//-Importaciones:
import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

//-Contenido:
const {VITE_API_URL} = getEnvVariables()
const calendarApi = axios.create({
    baseURL: VITE_API_URL
})
calendarApi.interceptors.request.use(config => {
    
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config;
})

//-Exportaciones:
export default calendarApi;