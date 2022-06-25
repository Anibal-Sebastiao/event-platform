import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql `
    mutation CreateSubscribrer ($name: String!, $email: String!) {
        createSubscriber(data: {name: $name, email: $email}){
            id
        }
    }
`; 

export default function Subscribe() { 
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading, data: any}] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event')

    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="flex justify-between w-full max-w-[1100px] items-center mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo/>
                    <h1 className="mt-8 text-[2.5rem] leadingt-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 leading-relaxed text-gray-200">
                        Em apenas uma semana você vai dominar na prática uma das 
                        tecnologias mais utilizadas e com alta demanda para acessar 
                        as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                    <form className="flex flex-col gap-2 w-full">
                        <input 
                            type="text" 
                            className="bg-gray-900 rounded px-5 h-14" 
                            placeholder="Seu nome completo"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            type="text"
                            className="bg-gray-900 rounded px-5 h-14"  
                            placeholder="Digite o seu email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button 
                            disabled={loading}
                            type="submit" 
                            className="mt-4 bg-green-500 hover:bg-green-700 uppercase py-4 rounded font-bold transition-colors text-sm disabled:opacity-50"
                            onClick={handleSubscribe}>
                                Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src="src/assets/code-editor.png" alt="" className="mt-10"/>
        </div>
    )
}