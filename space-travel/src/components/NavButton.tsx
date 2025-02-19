'use client'

import { NavButtonType } from "@/app/_lib/definition"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavButton = ({
    link,
    children,
    className
}: NavButtonType) => {
    const pathname = usePathname();
    console.log(pathname === link)
    return (
        <Link
            href={link}
            className={clsx('hover:border-r-2 md:hover:border-b-2 md:hover:border-r-0 border-brand-white/5 uppercase font-condensed p-3 rounded-sm',
                pathname === link && 'border-r-2 md:border-b-2 md:border-r-0 !border-brand-white',
                className
            )}>
            {children}
        </Link>
    )
}

export default NavButton