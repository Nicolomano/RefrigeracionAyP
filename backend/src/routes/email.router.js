import { Router } from "express";
import { resetPassword, sendEmail ,sendResetPasswordEmail} from "../controllers/email.controller.js";

const emailRouter = Router()

emailRouter.get("/", sendEmail)

emailRouter.post('/send-email-reset-password', sendResetPasswordEmail)

emailRouter.get('/reset-password/:token', resetPassword)

export default emailRouter