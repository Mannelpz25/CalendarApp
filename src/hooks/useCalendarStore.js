/* ---------- Ayuda!! ----------
*    Custom hook Calendar
*/
//-Importaciones:
import { useSelector, useDispatch} from "react-redux"
import Swal from "sweetalert2";
import calendarApi from "../api/calendarApi";
import { convertEventToDateEvents } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

//-Exportaciones:
export const useCalendarStore = () =>{
    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);
    const {user} = useSelector(state => state.auth);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async(calendarEvent) =>{
        try {
            if(calendarEvent.id){
                //actualizando
                const {data} = await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent)
                dispatch(onUpdateEvent({...calendarEvent, user}));
                return;
            }
            //creando
            const {data} = await calendarApi.post('/events',calendarEvent);
            dispatch(onAddNewEvent({id: data.event.id, user, ...calendarEvent}))
        } catch (error) {
            console.log(error)
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }
        
        
    }
    const startDeletingEvent = async() => {
        try {
            await calendarApi.delete(`/events/${activeEvent.id}`)
            dispatch(onDeleteEvent());
        } catch (error) {
            console.log(error)
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }
        
    }

    const startLoadingEvents = async() => {
        try {
            const {data} = await calendarApi.get('/events');
            const events = convertEventToDateEvents(data.events);
            dispatch(onLoadEvents(events));
        } catch (error) {
            console.log("Error al cargar eventos");
            console.log(error)
        }   
    }
    return {
        activeEvent,
        events,    
        hasEventSelected: !!activeEvent,    
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
    }
}