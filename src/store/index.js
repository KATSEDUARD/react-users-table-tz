import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { mainModel } from './model';

const { MAIN_MODEL } = mainModel;

const initialState = MAIN_MODEL;

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        searchUsers(state, action) {
            const { payload } = action;

            const searchQuery = payload.toLowerCase();
            const displayedUsers = state.users.filter(user => {
                const searchValue = user.name.toLowerCase();
                return searchValue.indexOf(searchQuery) !== -1;
            });

            state.filteredUsers = displayedUsers;
            state.searchRequest = searchQuery;
            state.usersAmount = state.filteredUsers.length;
        },
        sortUsers(state) {
            switch(state.sortBy) {
                case 'asc':
                    state.filteredUsers.sort((a, b) => b.id - a.id);
                    state.sortBy = 'desc';
                    break;
                case 'desc': 
                    state.filteredUsers.sort((a, b) => a.id - b.id);
                    state.sortBy = 'asc';
                    break;
                default:
                    state.filteredUsers.sort((a, b) => b.id - a.id); 
                    state.sortBy = 'asc';
                    console.log(3)
                    break;
            }
        },
    }
});

export const usersActions = usersSlice.actions;

export const store = configureStore({
    reducer: usersSlice.reducer
});