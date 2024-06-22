import type { ejemplo } from "../../../types/types";
import { Example } from "./Example";

interface Props {
    examples: ejemplo[]
}
export function Examples({ examples }: Props) {

    return <ul className="flex flex-col gap-2">
        {examples.map(example => <Example example={example} />)}
    </ul>
}