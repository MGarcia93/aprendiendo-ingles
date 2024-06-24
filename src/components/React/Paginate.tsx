interface Props{
    current:number,
    total:number,
    label:string
}
export function Paginate({current,total,label}:Props){
    
    return <div className=" text-center text-sm font-medium">{label} {current} de {total}</div>
}