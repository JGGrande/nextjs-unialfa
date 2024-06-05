import { BadRequestError, InternalServerError, UnauthorizedError } from "@/utils/HttpErrorResponses";
import axios from "axios";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

type User = {
    id: number;
    nome: string;
    email: string;
    senha: string;
    permissoes: string;
}

export async function POST(req: Request){
    try{
        const { email, password } = await req.json();

        if(!email) return BadRequestError("Email is required");

        const userResponse = await axios.get(`http://localhost:3001/usuarios?email=${email}`);

        const user = userResponse.data[0] as User;

        if(!user) return UnauthorizedError("Email or password incorrect.");

        if(user.senha !== password) return UnauthorizedError("Email or password incorrect.");

        const { senha, ...userWithoutSenha } = user;

        const token = sign(
            userWithoutSenha,
            'Grande',
            {
                expiresIn: "1h"
            }
        );

        return NextResponse.json({ user: userWithoutSenha, token }, { status: 200 });
    }catch(error){
        console.error(error)
        return InternalServerError();
    }
}