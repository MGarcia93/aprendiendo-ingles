
interface Props {
    label: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function Control({ label, value,name, onChange }: Props) {
    return <div className="space-y-2">
        <label htmlFor={name} className="text-sm font-medium">
            {label}
        </label>
        <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            name={name}
            id={name}
            value={value}
            onChange={onChange}
        />
    </div>
}