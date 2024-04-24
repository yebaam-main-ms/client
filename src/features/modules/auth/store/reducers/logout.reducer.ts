import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definición inicial del estado de logout. Asumo que quieres que sea false inicialmente.
const initialState = false;

const logoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {
    // Esta acción puede ser llamada para actualizar el estado directamente con un valor booleano.
    updateLogout: (state, action: PayloadAction<boolean>) => action.payload,
    // Esta acción resetea el estado a false.
    logout: () => false,
  }
});

// Exportar las acciones
export const { updateLogout, logout } = logoutSlice.actions;

// Exportar el reducer
export default logoutSlice.reducer;
