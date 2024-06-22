import { useState } from "react"
import { RefreshIcon } from "../icons/RefreshIcon"
type idioma = 'esp' | 'ing'
interface Props {
    ing: string,
    esp: string
}

export function Title({ ing, esp }: Props) {
    const [idioma, setIdioma] = useState<idioma>('ing')
    const changeIdioma = () => {
        setIdioma(prev => prev == 'ing' ? 'esp' : 'ing');
    }
    return <div className="flex items-center gap-2">
        <div className="text-6xl font-bold">{idioma == 'ing' ? ing : esp}</div>
        <span onClick={changeIdioma}><RefreshIcon /></span>
    </div>
}