const checkRemoveAll = (data, bool, id) => {
    return data.map(user => {
        return user.id === id ? {
            ...user,
            permissions: [
                { permission: 'view', status: bool },
                { permission: 'execute', status: bool },
                { permission: 'modify', status: bool },
                { permission: 'delete', status: bool }]
        } : user;
    });
};

const checkSingleAction = (data, id, type) => {
    return data.map(user => {
        return user.id === id ? {
            ...user,
            permissions: user.permissions.map(permission => {
                permission.status = permission.permission === type ? !permission.status : permission.status;
                return permission;
            })
        } : user;
    });
};

export const utils = {
    checkRemoveAll,
    checkSingleAction
};