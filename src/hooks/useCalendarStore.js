/* ---------- Ayuda!! ----------
*    Custom hook Calendar
*/
//-Importaciones:
import { useSelector, useDispatch} from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

//-Exportaciones:
export const useCalendarStore = () =>{
    const dispatch = useDispatch();
    const {events, activeEvent} =useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async(calendarEvent) =>{
        if(calendarEvent._id){
            //actualizando
            dispatch(onUpdateEvent({...calendarEvent}));
        }else{
            //creando
            dispatch(onAddNewEvent({_id: new Date().getTime(), ...calendarEvent}))
        }
    }
    const startDeletingEvent = () => {
        dispatch(onDeleteEvent());
    }
    return {
        activeEvent,
        events,    
        hasEventSelected: !!activeEvent,    
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}