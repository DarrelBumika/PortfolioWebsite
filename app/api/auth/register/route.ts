import User from '@/models/User';
import { connectDB } from '@/lib/db';
import { encryptPassword } from "@/lib/hash";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
    request: NextRequest
) {
    try {
        await connectDB()

        const { username, password } = await request.json();
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return new NextResponse(JSON.stringify({
                status: 400,
                message: "Username already exists",
                headers: {
                    'Content-Type': 'application/json'
                }
            }), { status: 400 });
        }

        const hashedPassword = await encryptPassword(password);
        const newUser = new User({ username, hashedPassword });
        await newUser.save();

        return new NextResponse(JSON.stringify({
            status: 201,
            message: `User ${username} registered successfully!`,
            headers: {
                'Content-Type': 'application/json'
            }
        }), { status: 201 });
    } catch (error) {
        console.error("Error during registration:", error);
        return new NextResponse(JSON.stringify({
            status: 500,
            message: "Internal Server Error",
            headers: {
                'Content-Type': 'application/json'
            }
        }), { status: 500 });
    }
}