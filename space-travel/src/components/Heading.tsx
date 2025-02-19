import { HeadingType } from "@/app/_lib/definition"
import clsx from "clsx"

const Heading = ({
    as: Component = "h1",
    size,
    className,
    children
}: HeadingType) => {
    return (
        <Component
            className={clsx(
                size === 'lg' && '~text-fs-900/fs-800',
                size === 'md' && '~text-fs-800/fs-700',
                size === 'sm' && '~text-fs-700/fs-600',
                size === 'xs' && '~text-fs-600/fs-500',
                className
            )}>
            {children}
        </Component>
    )
}

export default Heading