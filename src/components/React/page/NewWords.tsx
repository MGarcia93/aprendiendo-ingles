import { words as allWords } from "../../../data/words";
import { useMemo, useState } from "react";
import type { stageVerb, words } from "../../../types/types";
import { TOTAL_WORDS, buttonsWord } from "../../../data/constant";
import { Title } from "../Title";
import { Control } from "../form/Control";
import Collapse from "../Collapse";
import { Examples } from "../Examples";
import { Button } from "../form/Button";
import { Paginate } from "../Paginate";
import api from "../../../utils/api";
import { Categories } from "../Categories";

export function NewWords() {
    const [words, setWords] = useState<words>(() => allWords.sort(() => Math.random() - Math.random()).slice(0, TOTAL_WORDS))
    const [current, setCurrent] = useState<number>(() => 1);
    const [value, setValue] = useState<string>("")
    const [stage, setStage] = useState<stageVerb>('verify')
    const [error, setError] = useState<string | undefined>()
    const word = useMemo(()=> words[current - 1],[words]);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const handleClickButton = () => {
        if (stage == 'verify') {
            const e = api.verifyWord(value, word);
            setError(e);
            if (!e) {
                setStage(current == TOTAL_WORDS ? 'finish' : 'next');
                return;
            }
        }
        if (stage == 'next') {
            setCurrent(prev => prev + 1);
            setValue("");
            setStage('verify');
        }
        if (stage == 'finish') {
            window.location.href = '/';
        }
    }
   

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <Title ing={word.ing} esp={word.esp[0]}></Title>
            <Categories categories={word.categorias}></Categories>
            <div className="grid grid-cols-1 gap-4 w-full">
                <Control name="word" label="Escribe la traducción de la palabra" value={value} onChange={onChange} error={error}  answer={word.esp[0]}></Control>
            </div>

            <Collapse title="Ejemplos">
                <Examples examples={word.ejemplos} />
            </Collapse>
            <div className="flex items-center gap-2">
                <Button stage={stage} onClick={handleClickButton} buttons={buttonsWord}></Button>
            </div>
            <Paginate current={current} total={TOTAL_WORDS} label='Palabra'></Paginate>
        </div>
    )
}