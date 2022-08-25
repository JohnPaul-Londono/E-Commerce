import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Bumi Patterson',
        email: 'bumi@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Kya Londono',
        email: 'kya@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users