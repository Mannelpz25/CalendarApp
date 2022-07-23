/* ---------- Ayuda!! ----------
*    App principal
*/
//-Importaciones:
import { AppRouter } from "./router"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"

//-Contenido:
export const CalendarApp = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
    
  )
}
