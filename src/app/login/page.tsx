"use client"

import { SyntheticEvent, useCallback, useRef } from "react";
import styles from "./style.module.css";

export default function Login(){
    
    const refForm = useRef<HTMLFormElement>(null);

    const submitForm = useCallback((event: SyntheticEvent) => {
        event.preventDefault();

    }, [ refForm ]);
    
    return (
        <>
            <div
                // className={styles.main}
                className="flex flex-col justify-center items-center w-screen h-screen"
            >
                <div
                    // className={styles.border}
                    className="border-solid rounded-md border-2 p-5 border-slate-700 w-4/12 h-5/12"
                >
                    <div className="flex flex-col items-center mb-3">
                        <h1 className="text-blue-500 text text-5xl">Login</h1>
                    </div>
                    <hr />
                    <form
                        className="items-center mt-6"
                        onSubmit={submitForm}
                        ref={refForm}
                    >
                        <div
                            className="md:w-full pr-4 pl-4"
                        >
                            <label
                                className="block text-sm font-medium text-slate-700"
                            >
                                Email
                            </label>
                            <input 
                                type="email"
                                className="block peer appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                placeholder="Digite seu email"
                                id="email"
                                required
                            />
                            <div
                                className="mt-2 hidden peer-invalid:visible text-pink-600 text-sm"
                            >
                                Porfavor digite seu email.
                            </div>    
                        </div>
                        <div
                            className="md:w-full pr-4 pl-4 mt-6"
                        >
                            <label
                                className="block text-sm font-medium text-slate-700"
                            >
                                Senha
                            </label>
                            <input 
                                type="password"
                                className="block peer appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                placeholder="Digite sua senha"
                                id="senha"
                                required
                            />
                            <div
                                className="mt-2 hidden peer-invalid:visible text-pink-600 text-sm"
                            >
                                Porfavor digite sua senha.
                            </div>    
                        </div>
                        <div className=" pr-4 pl-4 mt-6">
                            <button type="submit" className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
