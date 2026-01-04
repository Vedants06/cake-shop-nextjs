import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcryptjs';



export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password } = body;

        //check if email already exist
        const existingEmail = await prisma.user.findUnique({
            where: { email: email }
        });
        if (existingEmail) {
            return NextResponse.json({ user: null, message: "User already Exists" }, { status: 409 })
        }

        //check if username already exist
        const existingUsername = await prisma.user.findUnique({
            where: { username: username }
        });
        if (existingUsername) {
            return NextResponse.json({ user: null, message: "Username already Exists" }, { status: 409 })
        }
        const hashedPassword = await hash(password, 10);
        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                password : hashedPassword
            }
        });
        const {password: newUserPassword, ...rest}= newUser


        return NextResponse.json({user: rest , message : "User created Successfully"}, { status: 201});
    } catch (error) {
        return NextResponse.json({ message : "Something Went Wrong"}, { status: 500});
     
    }
}   