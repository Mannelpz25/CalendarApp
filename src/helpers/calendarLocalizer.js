import esMX from 'date-fns/locale/es'  
import { format, parse, startOfWeek, getDay } from 'date-fns/'  
import { dateFnsLocalizer } from 'react-big-calendar'
const locales = {
    'es': esMX,
}

export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})