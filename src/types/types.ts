
export interface Card {
  title: string;
  body: string;
  href: string;
  icon: any
}

export type verbs = verb[]
export type words = word[]
export interface buttonInterface{
  label:string,
  icon:()=>JSX.Element,
  className?:string
}
export type buttons= Record<stageVerb,buttonInterface>

export interface verb {
  infinitive: string
  esp: string
  presentContinuous: string
  pastSimple: string
  future: string
  ejemplo: ejemplo[]
}
export interface word {
  ing: string
  esp: string[]
  categorias:string[]
  ejemplos: ejemplo[]
}
export interface ejemplo {
  ing: string
  esp: string
}

export type idioma = 'esp' | 'ing'
export type stageVerb = 'verify' | 'next' | 'finish'

export type verbType = 'infinitive' | 'presentContinuous' | 'pastSimple' | 'future';
export interface conjugationVerb {
  infinitive: string,
  presentContinuous: string,
  pastSimple: string,
  future: string,
}

export type controlVerb = {
  label: string,
  name: verbType
}

