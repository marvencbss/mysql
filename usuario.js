const Sequelize = require('sequelize');
const database = require('../data_base/db');

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    }
    }, {
    timestamps: true,
    hooks: {
        beforeCreate: (user, options) => {
            const now = new Date();
            const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
            user.createdAt = threeHoursLater;
            user.updateAt = threeHoursLater;
        },
        beforeUpdate: (user, options) => {
            const now = new Date();
            const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
            user.updateAt= threeHoursLater;
        }
    }

})

module.exports = Usuario
