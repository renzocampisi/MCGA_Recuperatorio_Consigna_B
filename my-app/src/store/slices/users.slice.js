import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const usersSlice = createSlice({
		name: 'users',
    initialState: undefined,
    reducers: {
        
    }
})

export const {  } = usersSlice.actions;

export default usersSlice.reducer;