import {NextRequest, NextResponse} from "next/server";

import { connectDB } from "@/lib/db"
import { comparePassword } from "@/lib/hash";
import { generateToken } from "@/lib/auth";
import User from "@/models/User";

export async function POST(
    request: NextRequest
) {
    try {
        await connectDB();

        const body = await request.json()
        const { username, password } = body

        const user = await User.findOne({ username })
        if (!user) {
            return new Response(JSON.stringify({
                status: 401,
                message: "Wrong username",
                headers: { "Content-Type": "application/json" },
            }), { status: 401 })
        }

        const isPasswordValid = await comparePassword(password, user.hashedPassword)
        if (!isPasswordValid) {
            return new Response(JSON.stringify({
                status: 401,
                message: "Wrong password",
                headers: { "Content-Type": "application/json" },
            }), { status: 401 })
        }

        const token = generateToken({ userId: user._id, username: user.username })
        const response = NextResponse.json({ message: "Login Successful" })

        response.cookies.set("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24, // 1 day
        })

        return response
    } catch (error) {
        console.error("Error during login:", error)
        return new Response(JSON.stringify({
            status: 500,
            message: "Internal Server Error",
            headers: { "Content-Type": "application/json" },
        }), { status: 500 })
    }
}