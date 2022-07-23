/* ---------- Ayuda!! ----------
*    Componente de Eventos en calendario
*/
//-Importaciones:

//-Contenido:
export const CalendarEvent = ({event}) => {
    const {title, user} = event;
    return (
        <>
            <strong>{title}</strong>
            <span> - {user.name}</span>
        </>
    )
}
