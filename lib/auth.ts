import jwt from "jsonwebtoken"
import {StringValue} from "ms";

const JWT_SECRET = process.env.JWT_SECRET!

export const generateToken = (payload: object, expiresIn: StringValue | number = "1h") => {
    return jwt.sign(
        payload,
        JWT_SECRET,
        { expiresIn }
    )
}

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch (error) {
        console.log("Token verification failed:", error)
        return null
    }
}