"use client"

import { Loading } from "@/components/loading";
import { Toast } from "@/components/toast";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { SyntheticEvent, useCallback, useRef, useState } from "react";

type FormTarget = EventTarget & {
    email: {
        value: string;
    };
    password: {
        value: string;
    }
}

type LoginResponse = {
    user: {
        id: string;
        nome: string;
        email: string;
        permissoes: string;
    };
    token: string;
}

export default function Login(){
    const [showToast, setShowToast] = useState(false);
    const [loading, setLoading] = useState(false);

    const refForm = useRef<HTMLFormElement>(null);

    const router = useRouter();

    const submitForm = useCallback((event: SyntheticEvent) => {
        event.preventDefault(); 
        setLoading(true)
        if(refForm.current?.checkValidity()){
            const { email, password } = event.target as FormTarget;
        
            api.post('/api/login', {
                email: email.value,
                password: password.value
            })
            .then(response => {
                setLoading(false);
                
                const { user, token } = response.data as LoginResponse;

                setCookie(undefined, "@painel-1pitchau-token", token);

                localStorage.setItem("@painel-1pitchau-user", JSON.stringify(user));

                router.push("/dashboard");
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
                setShowToast(true);
            })
        }else{
            refForm.current?.classList.add("invalid:border-red-500")
        }

    }, [refForm]);
    
    return (
        <>
            <Loading show={loading} />

            <Toast 
                show={showToast}
                text="Dados invalidos"
                type="error"
                onClose={() => setShowToast(false)}
            />

            <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen">
                <div className="w-full max-w-md bg-white rounded-lg shadow border">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Faça login na sua conta
                        </h1>
                        <form ref={refForm} className="space-y-4 md:space-y-6" onSubmit={submitForm}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Seu email</label>
                                <input type="email" name="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400" placeholder="Digite seu email" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
                                <input type="password" name="password" id="password" placeholder="Digite sua senha" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400" required />
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
    
    
}

