/* ---------- Ayuda!! ----------
*    Slice del UI
*/
//-Importaciones:
import { createSlice } from "@reduxjs/toolkit";

//-Contenido:
export const uiSlice = createSlice({

    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onOpenDateModal: (state) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: (state) => {
            state.isDateModalOpen = false;
        },
    },
});

//-Exportaciones:
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;