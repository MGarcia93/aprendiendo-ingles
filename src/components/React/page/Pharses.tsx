import { useEffect, useMemo, useState } from "react";
import type { stageVerb } from "../../../types/types";
import { Paginate } from "../Paginate";
import { TOTAL_PHARSES, buttonsPharse } from "../../../data/constant";
import { Button } from "../form/Button";
import api from "../../../utils/api";
import { EyeOpen } from "../icons/EyeOpen";
import { EyeClose } from "../icons/EyeClose";

interface Props {
  pharses: string[]
}
export function Pharses({ pharses: pharsesAll }: Props) {
  const [current, setCurrent] = useState<number>(() => 1);
  const [pharses, setPharses] = useState<string[]>(() => pharsesAll.sort(() => Math.random() - Math.random()).slice(0, TOTAL_PHARSES))
  const [value, setValue] = useState<string>("")
  const [stage, setStage] = useState<stageVerb>('verify')
  const [error, setError] = useState<boolean>(false)
  const [showCorrect, setShowCorrect] = useState<boolean>(false)

  const pharse = pharses[current - 1]
  const errorPharse = useMemo(() => api.getPharse(pharse), [pharse]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code === 'Enter' && stage == 'verify') {
      event.preventDefault()
      handleClickButton()
    }
  }
  const handleClickButton = () => {
    if (stage == 'verify') {
      const e = !api.verifyPharse(value, pharse);
      setError(e);
      if (!e) {
        setStage(current == TOTAL_PHARSES ? 'finish' : 'next');
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
  const showAnswer = () => {
    console.log('click')
    setShowCorrect(true)
    setTimeout(() => setShowCorrect(false), 5000)
  }

  return <section>
    <header>
      <h2 className="text-3xl font-bold mb-6">Arreglar la Frase</h2>
    </header>
    <article >
      <h3 className="text-xl font-bold mb-4">Verifica y Escribe la Oración, Corrigiéndola si Es Necesario:</h3>
      <div className="p-4 text-center">
        <p className={`text-xl font-bold ${showCorrect ? ' text-green-500' : ''}`}>{showCorrect ? pharse : errorPharse} {" "}
          <button
            onClick={showAnswer}
            disabled={showCorrect}
            title="Muestra la palabra escrita correctamente durante 5 segundos">
            {showCorrect ?
              <EyeClose className=" w-6 h-6 text-white"></EyeClose>
              :
              <EyeOpen className=" w-6 h-6 text-white"></EyeOpen>
            }
          </button>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <textarea
          onChange={onChange}
          onKeyDown={handleKeyDown}
          className={`flex 
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
                text-black
                ${error ? ' border-red-500' : ''}
                ${stage != 'verify' ? ' bg-green-200' : ''}
                 min-h-[100px] w-full`}
          placeholder="Escribe la frase corregida aquí..."
          value={value} />
        <Button stage={stage} buttons={buttonsPharse} onClick={handleClickButton}></Button>
      </div>

    </article>
    <footer className="py-4">

      <Paginate current={current} total={TOTAL_PHARSES} label="Oracione "></Paginate>
    </footer>
  </section>
}