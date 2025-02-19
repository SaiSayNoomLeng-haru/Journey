import { TabButtonType } from '@/app/_lib/definition'
import clsx from 'clsx'
import Link from 'next/link'

const TabButton = async ({
    children,
    className,
    link,

}: TabButtonType) => {
    // const { id } = (await searchParams).id;
    return (
        <Link
            href={link}
            className={clsx('hover:border-b-4 border', className)}>
            {children}
        </Link>
    )
}

export default TabButton