import { useState } from "react"
import { Mic } from "./icons/Mic"
import api from "../../utils/api"
import type { idioma } from "../../types/types"
import { Translate } from "./icons/Translate"

interface Props {
    ing: string,
    esp: string
}

export function Title({ ing, esp }: Props) {
    const [idioma, setIdioma] = useState<idioma>('ing')
    const changeIdioma = () => {
        setIdioma(prev => prev == 'ing' ? 'esp' : 'ing');
    }

    return <div className="flex items-center gap-3">
        <button onClick={changeIdioma}><Translate className="w-8 h-8" /></button>
        <div className="text-6xl font-bold" title="traducir">{idioma == 'ing' ? ing : esp}</div>
        <button onClick={() => api.speakWord(ing)}><Mic className="w-8 h-8" /></button>
    </div>
}