import { ArrowNext } from "./icons/ArrowNext";
import { Verify } from "./icons/Verify";
import { verbs as allVerbs } from "../../data/verbs";
import { useState } from "react";
import type { verbType, stageVerb, verbs, conjugationVerb } from "../../types/types";
import { TOTAL_VERBS } from "../../data/constant";
import { Title } from "./Verb/Title";
import { Control } from "./Verb/Control";
import { Buton } from "./Verb/Buton";
type control = {
    label: string,
    name: verbType
}
const controls: control[] = [
    {
        label: 'Infinitivo',
        name: 'infinitive'
    },
    {
        label: 'Presente Continuo',
        name: 'presentContinuous'
    },
    {
        label: 'Pasado Simple',
        name: 'pastSimple'
    },
    {
        label: 'Futuro',
        name: 'future'
    },

]
export function Verbs() {
    const [verbs, setVerbs] = useState<verbs>(() => allVerbs.sort(() => Math.random() - Math.random()).slice(0, TOTAL_VERBS))
    const [current, setCurrent] = useState<number>(() => 1);
    const [values, setValues] = useState<conjugationVerb>(() => controls.reduce((acu, cur) => ({ ...acu, [cur.name]: "" }), {} as conjugationVerb))
    const [stage, setStage] = useState<stageVerb>('verify')
    const verb = verbs[current - 1];
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const handleClickButton = () => {
        if (stage == 'verify') {
            return;
        }
        if (stage == 'next') {
            setCurrent(prev => prev + 1);
            setStage('verify');
        }
        if (stage == 'finish') {
            window.location.href = '/';
        }
    }
    const verify=()=>{

    }

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <Title ing={verb.ing} esp={verb.esp}></Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {controls.map(control => <Control name={control.name} label={control.label} value={values[control.name]} onChange={onChange}></Control>)}
            </div>
            <div className="flex items-center gap-2">
                <Buton stage={stage} onClick={() => { }}></Buton>
            </div>
            <div className="text-sm font-medium">Verbo 5 de 10</div>
        </div>
    )
}