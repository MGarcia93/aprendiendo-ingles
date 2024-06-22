import { verbs as allVerbs } from "../../data/verbs";
import { useState } from "react";
import type { stageVerb, verbs, conjugationVerb, verbType } from "../../types/types";
import { TOTAL_VERBS, controls } from "../../data/constant";
import { Title } from "./Verb/Title";
import { Control } from "./Verb/Control";
import { Buton } from "./Verb/Buton";
import api from "../../utils/api";
import Collapse from "./Verb/Collapse";
import { Examples } from "./Verb/Examples";


export function Verbs() {
    const [verbs, setVerbs] = useState<verbs>(() => allVerbs.sort(() => Math.random() - Math.random()).slice(0, TOTAL_VERBS))
    const [current, setCurrent] = useState<number>(() => 1);
    const [values, setValues] = useState<conjugationVerb>(() => api.cleanVerb())
    const [stage, setStage] = useState<stageVerb>('verify')
    const [error, setError] = useState<Record<verbType, string>>({} as Record<verbType, string>)
    const verb = verbs[current - 1];
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const handleClickButton = () => {
        if (stage == 'verify') {
            const e = api.verifyVerb(values, verb);
            setError(e);
            if (Object.entries(e).length == 0) {
                setStage('next');
                return;
            }
        }
        if (stage == 'next') {
            setCurrent(prev => prev + 1);
            setStage('verify');
        }
        if (stage == 'finish') {
            window.location.href = '/';
        }
    }


    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <Title ing={verb.infinitive} esp={verb.esp}></Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {controls.map(control => <Control name={control.name} label={control.label} value={values[control.name]} onChange={onChange} error={error[control.name]}></Control>)}
            </div>
            <Collapse title="Ejemplos">
                <Examples examples={verb.ejemplo} />
            </Collapse>
            <div className="flex items-center gap-2">
                <Buton stage={stage} onClick={handleClickButton}></Buton>
            </div>
            <div className="text-sm font-medium">Verbo {current} de {TOTAL_VERBS}</div>
        </div>
    )
}