const sequelize = require('../config/connection');
const { User, Inventory } = require('../models');

const userdata = [
    {
        username: 'andi',
        email: 'admin@invcomponents.com',
        password: 'password123'
    },
    {
        username: 'anderson',
        email: 'anderson@vri.com.br',
        password: 'password123'
    },
    
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
