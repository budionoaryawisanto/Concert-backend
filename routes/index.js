import express from "express";
import { GetUsers, Register, Login, Logout } from "../controller/users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controller/refreshToken.js";
import { GetEvents, UploadEvents } from "../controller/events.js";

const router = express.Router()

router.get('/users', verifyToken, GetUsers)
router.post('/users', Register)
router.post('/login', Login)
router.get('/token', refreshToken)
router.delete('/logout', Logout)

router.get('/events', GetEvents)
router.post('/events', UploadEvents)

export default router