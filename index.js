import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import multer from "multer"
import db from "./config/database.js"
import Users from './models/userModel.js'
import Events from "./models/eventModel.js"
import router from "./routes/index.js"
dotenv.config()
const app = express()
const port = 5000

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/svg'
    ) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

try {
    await db.authenticate();
    console.log("database connected")
    await Users.sync();
    await Events.sync();
} catch (error) {
    console.error(error)
}

app.use(cors({ credentials: true, origin:"http://localhost:3000" }))
app.use(cookieParser())
app.use(express.json())
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'))
app.use('/images', express.static('images'))
app.use(router)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

