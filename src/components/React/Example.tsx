import { useState } from "react";
import type { idioma, ejemplo } from "../../types/types";
import { Translate } from "./icons/Translate";
import { Mic } from "./icons/Mic";
import api from "../../utils/api";

interface Props {
    example: ejemplo
}
export function Example({ example }: Props) {
    const [idioma, setIdioma] = useState<idioma>('ing');
    const handleChageIdioma=()=>{
        setIdioma(prev=>prev=='ing'?'esp':'ing');
    }
    return <li className="flex gap-2 items-center">
         <button title="traducir" onClick={handleChageIdioma}><Translate className='w-5 h-5'></Translate></button>
        <button onClick={() => api.speakWord(example.ing)}><Mic className="w-5 h-5" /></button>

        {example[idioma]}
    </li>
}