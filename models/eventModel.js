import { Sequelize } from "sequelize";
import db from "../config/database.js"
const { DataTypes } = Sequelize

const Events = db.define('events', {
    image: {
        type: DataTypes.STRING,
    },
    title: {
        type: DataTypes.STRING,
    },
    subtitle: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
    },
    place: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATEONLY,
    },
    regularPrice: {
        type: DataTypes.INTEGER,
    },
    vipPrice: {
        type: DataTypes.INTEGER,
    }
})

export default Events