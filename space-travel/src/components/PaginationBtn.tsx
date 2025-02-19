import { PaginationButton } from "@/app/_lib/definition"
import clsx from "clsx"

const PaginationBtn = ({
    variation,
    children
}: PaginationButton) => {
    return (
        <>
            <button
                className={clsx('bg-brand-white/80 rounded-full aspect-square',
                    {
                        'w-[1.5rem] md:w-[2rem]': variation === 'numbered',
                        'w-[0.625rem] md:w-[0.935rem]': variation === 'dotted'
                    })}>
                {variation === 'numbered' && <span className="text-brand-dark">{children}</span>}
            </button>
        </>
    )
}

export default PaginationBtn