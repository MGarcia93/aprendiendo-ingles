import { controls } from "../data/constant";
import type { conjugationVerb, verbType } from "../types/types";

const api = {
    verifyVerb: (datos:conjugationVerb, verb:any):Record<verbType,string> => {
        const error = {} as Record<verbType,string>; 
        Object.entries(datos).forEach(([key, value]) => {
            if (value?.toLowerCase() !== verb[key]) {
                error[key as verbType] = 'El valor ingresado es incorecto'
            }
        });
        return error;
    },
    cleanVerb: ():conjugationVerb => {
        return controls.reduce((acu, cur) => ({ ...acu, [cur.name]: '' }), {} as conjugationVerb)
    },
    speakWord:(word:string):void=> {
        // Verificar si el navegador soporta la Web Speech API
        if ('speechSynthesis' in window) {
          // Crear una instancia de SpeechSynthesisUtterance
          const message = new SpeechSynthesisUtterance();
          
          // Establecer el texto que se va a hablar
          message.text = word;
          
          // Configurar el idioma a inglés (Estados Unidos)
          message.lang = 'en-US';
          
          // Usar el sintetizador de voz para hablar la palabra
          window.speechSynthesis.speak(message);
        } else {
          console.error('Tu navegador no soporta la Web Speech API.');
        }
      }
};
export default api;