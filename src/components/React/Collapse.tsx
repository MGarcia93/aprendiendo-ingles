import React, { useEffect, useState } from 'react';
import { Arrow } from './icons/Arrow';

interface Props {
    title: string;
    children: React.ReactNode;
}

export function Collapse({ title, children }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        setIsOpen(false);
    },[children])
    return (
        <div className="border rounded-md overflow-hidden w-full">
            <button
                className="w-full py-2 px-4  flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-lg">{title}</span>
                <Arrow className={`w-5 h-5 transition-transform transform ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
            </button>

            {/* Contenido del Collapse con transición */}
            <div
                className={`transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'
                    } overflow-hidden`}
            >
                <div className="px-4 py-2">{children}</div>
            </div>
        </div>
    );
};

export default Collapse;
