import { useState } from "react"
import { EyeClose } from "../icons/EyeClose";
import { EyeOpen } from "../icons/EyeOpen";

interface Props {
    label: string,
    name: string,
    value: string,
    error?: string,
    answer: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function Control({ label, value, name, onChange, error, answer }: Props) {

    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const toggleAnswer = () => {
        setShowAnswer(prev => !prev)
    }
    return <div className="space-y-2 ">
        <label htmlFor={name} className="text-sm font-medium">
            {label}
        </label>
        <div className="relative">

            <input
                className={`                
                flex 
                h-10 
                w-full 
                rounded-md border 
                border-input bg-background 
                px-3 py-2 text-sm ring-offset-background                
                placeholder:text-muted-foreground 
                focus-visible:outline-none 
                focus-visible:ring-2 
                focus-visible:ring-ring 
                focus-visible:ring-offset-2 
                disabled:cursor-not-allowed 
                disabled:opacity-50
                ${showAnswer ? 'text-gray-500' : 'text-black'}
                ${error ? ' border-red-500' : ''}                
                `}
                readOnly={showAnswer}
                name={name}
                id={name}
                value={showAnswer ? answer : value}
                onChange={onChange}

            />
            <button className="absolute right-2 bottom-2 text-black" title={showAnswer ? 'volver a ingresar repuesta' : 'mostrar repuesta'} onClick={toggleAnswer}>
                {showAnswer ?
                    <EyeClose className=" w-6 h-6 "></EyeClose>
                    :
                    <EyeOpen className=" w-6 h-6 "></EyeOpen>
                }
            </button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
}