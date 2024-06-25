const typeError: Record<string, (pharse: string) => string> = {
    none: (pharse: string): string => pharse,
    changeToBe: changeToBe,
    shuffleWords: shuffleWords,
    removeAux: removeAux,
    changeWH: changeWH
}

function changeToBe(pharse: string) {
    const remplaces: Record<string, string> = {
        "is": "are",
        "are": "is",
        "was": "were",
        "were": "was",
        "isn't": "aren't",
        "aren't": "isn't",
        "wasn't": "weren't",
        "weren't": "wasn't"
    };
    return pharse.replace(/\b(is|are|was|were|isn't|aren't|wasn't|weren't)\b/gi, function (match) {
        // Verificar si la primera letra después del reemplazo debe ser mayúscula
        let transformado = remplaces[match.toLowerCase()] || match;
        if (match[0] === match[0].toUpperCase()) {
            transformado = transformado.charAt(0).toUpperCase() + transformado.slice(1);
        }
        return transformado;
    });
}
function changeWH(pharse: string) {
    const words = ["What", "Why", "Where", "Who", "When", "How"];
    return pharse.replace(/\b(what|why|where|who|when|how)\b/gi, function (match) {
        const remplaces = words.filter((w) => w != match);
        return remplaces[Math.floor(Math.random() * remplaces.length)];

    });
}

function shuffleWords(pharse: string): string {
    let words = pharse.split(' ');
    let lastWord = words.pop() as string;
    let swaps = 0;
    for (let i = 0; i < Math.min(words.length - 1, 2); i++) {
        const j = Math.floor(Math.random() * (words.length - 1)) + 1;
        [words[i], words[j]] = [words[j].toLowerCase(), words[i].toLowerCase()];
        swaps++;
    }

    let firstWord = words[0];
    words[0] = firstWord.toLowerCase();
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    words.push(lastWord);
    let shuffledPharse = words.join(' ');
    return shuffledPharse;
}

function removeAux(pharse: string) {
    // Expresión regular para identificar los verbos auxiliares en presente y pasado
    const regex = /^(am|is|are|was|were|have|has|had|do|does|did)\b\s*/i;

    // Reemplazar los verbos auxiliares por una cadena vacía
    return pharse.replace(regex, '');
}
export function generateError(pharse: string) {
    const errores = Object.keys(typeError);
    let error: string
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber < 7) {
        error = 'shuffleWords';
    } else {
        const filteredErrores = errores.filter(err => err !== 'shuffleWords');
        error = filteredErrores[Math.floor(Math.random() * filteredErrores.length)];
    }
    return typeError[error](pharse);
}