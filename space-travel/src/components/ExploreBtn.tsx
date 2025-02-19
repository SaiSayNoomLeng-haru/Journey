import { ExploreBtnType } from '@/app/_lib/definition'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

const ExploreBtn = ({
    children,
    className,
    link
}: ExploreBtnType) => {
    return (
        <Link
            href={link}
            className={clsx('w-[9rem] aspect-square bg-brand-white text-brand-dark grid place-items-center font-belleFair uppercase rounded-full cursor-pointer relative z-50 after:content-[""] after:absolute after:inset-0 after:bg-brand-white/30 after:rounded-full after:scale-100 after:transition-transform after:duration-300 after:z-10 hover:after:scale-150 md:w-[17rem] md:~text-fs-600/fs-400',
                className)}>
            {children}
        </Link>
    )
}

export default ExploreBtn