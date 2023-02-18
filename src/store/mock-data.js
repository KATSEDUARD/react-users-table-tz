const MOCK_USERS = [
    {
        id: 0,
        name: 'Username 1',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 1,
        name: 'Username 2',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 2,
        name: 'Username 3',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 3,
        name: 'Username 4',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 4,
        name: 'Username 5',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 5,
        name: 'Username 6',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 6,
        name: 'Username 7',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 7,
        name: 'Username 8',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 8,
        name: 'Username 9',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 9,
        name: 'Username 10',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 10,
        name: 'Username 11',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 11,
        name: 'Username 12',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 12,
        name: 'Username 13',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 13,
        name: 'Username 14',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 14,
        name: 'Username 15',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 15,
        name: 'Username 16',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 16,
        name: 'Username 17',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 17,
        name: 'Username 18',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 18,
        name: 'Username 19',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 19,
        name: 'Username 20',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 20,
        name: 'Username 21',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 21,
        name: 'Username 22',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 22,
        name: 'Username 23',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 23,
        name: 'Username 24',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 24,
        name: 'Username 25',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 25,
        name: 'Username 26',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 26,
        name: 'Username 27',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 27,
        name: 'Username 28',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 28,
        name: 'Username 29',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
    {
        id: 29,
        name: 'Username 30',
        permissions: [
            { permission: 'view', status: false },
            { permission: 'execute', status: false },
            { permission: 'modify', status: false },
            { permission: 'delete', status: false },
        ]
    },
];

export const mockData = {
    MOCK_USERS
};