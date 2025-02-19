import { BoundedType } from "@/app/_lib/definition"
import clsx from "clsx"

const Bounded = ({
    children,
    className,
    as: Component = 'section',
}: BoundedType) => {
    return (
        <Component
            className={clsx(
                'py-10 grid grid-cols-4 max-md:grid-rows-2 lg:grid-cols-12 md:grid-cols-8 min-h-screen pt-[5rem] gap-5',
                className
            )}>
            {children}
        </Component>
    )
}

export default Bounded