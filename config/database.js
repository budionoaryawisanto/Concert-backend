import { Sequelize } from "sequelize";
const db = new Sequelize('concert', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

export default db;