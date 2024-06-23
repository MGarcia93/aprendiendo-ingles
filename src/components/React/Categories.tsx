interface Props {
    categories: string[]
}
export function Categories({ categories }: Props) {
    return <div className="flex items-center gap-2w-full">
        <p className=" font-medium">Categorias:</p>
        <div className="flex items-center gap-2">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="px-2 py-1 rounded-md text-md font-medium bg-primary-900 text-primary-foreground-900 capitalize"

                >
                    {category}
                </div>
            ))}
        </div>
    </div>
}