import type { stageVerb } from "../../../types/types";
import { ArrowNext } from "../icons/ArrowNext";
import { Verify } from "../icons/Verify";

interface Props {
    stage: stageVerb,
    onClick: () => void
}

const buttons = {
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
        icon: Verify,
    }
}
export function Buton({ stage, onClick }: Props) {
    const { label, icon: Icon } = buttons[stage];
    return <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        onClick={onClick}
    >
        <Icon></Icon>
        {label}
    </button>

}