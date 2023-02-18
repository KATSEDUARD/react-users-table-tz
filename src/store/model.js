import { mockData } from './mock-data';

const { MOCK_USERS } = mockData;

const MAIN_MODEL = {
    users: MOCK_USERS,
    filteredUsers: MOCK_USERS,
    usersAmount: MOCK_USERS.length,
    searchRequest: '',
    sortBy: 'asc'
};

export const mainModel = {
    MAIN_MODEL
};