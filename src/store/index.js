import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { mainModel } from './model';
import { isNull } from 'lodash';
import { mockData } from './mock-data';
import { toast } from 'react-toastify';
import { constants } from '../constants/constants';
import { utils } from '../utils/utils';

const { SAVED } = constants;

const { MOCK_USERS } = mockData;

const { MAIN_MODEL } = mainModel;

const initialState = MAIN_MODEL;

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loadData(state) {
            state.users = !isNull(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : MOCK_USERS;
            state.filteredUsers = state.users;
            state.usersAmount = state.filteredUsers.length;
        },
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
                    break;
            }
        },
        checkActions(state, action) {
            const { payload: { type, id } } = action;
            
            state.users = utils.checkSingleAction(state.users, id, type);
            state.filteredUsers = utils.checkSingleAction(state.filteredUsers, id, type);
        },
        save(state) {
            localStorage.setItem('users', JSON.stringify(state.users));
            toast.success(`${SAVED}!`);
        },
        checkListener(state, action) {
            const { payload: { type, id } } = action;

            switch(type) {
                case 'check':
                    state.users = utils.checkRemoveAll(state.users, true, id);
                    state.filteredUsers = utils.checkRemoveAll(state.filteredUsers, true, id);
                    break;
                case 'remove':
                    state.users = utils.checkRemoveAll(state.users, false, id);
                    state.filteredUsers = utils.checkRemoveAll(state.filteredUsers, false, id);
                    break;
                default: return;
            }
        }
    }
});

export const usersActions = usersSlice.actions;

export const store = configureStore({
    reducer: usersSlice.reducer
});