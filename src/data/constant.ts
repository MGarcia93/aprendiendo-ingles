import { ArrowBack } from "../components/React/icons/ArrowBack";
import { ArrowNext } from "../components/React/icons/ArrowNext";
import { Verify } from "../components/React/icons/Verify";
import type { buttonInterface, controlVerb, stageVerb } from "../types/types";

export const TOTAL_VERBS=10;
export const TOTAL_WORDS=10;

export const controls: controlVerb[] = [
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


export const buttonsVerb:Record<stageVerb,buttonInterface> = {
    verify: {
        label: "Verficar",
        icon: Verify,

    },
    next: {
        label: "Siguiente Verbo",
        icon: ArrowNext,
    },
    finish: {
        label: "Finalizar",
        icon: ArrowBack,
        className:"bg-zinc-900 text-white"
    }
}
export const buttonsWord:Record<stageVerb,buttonInterface> = {
    verify: {
        label: "Verificar",
        icon: Verify,
    },
    next: {
        label: "Siguiente Palabra",
        icon: ArrowNext,
    },
    finish: {
        label: "Finalizar",
        icon: ArrowBack,
    }
}