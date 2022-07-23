/* ---------- Ayuda!! ----------
*    Helper localaizer 
*/
//-Importaciones:
import esMX from 'date-fns/locale/es'  
import { format, parse, startOfWeek, getDay } from 'date-fns/'  
import { dateFnsLocalizer } from 'react-big-calendar'

//-Contenido:
const locales = {
    'es': esMX,
}

//-Exportaciones:
export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})