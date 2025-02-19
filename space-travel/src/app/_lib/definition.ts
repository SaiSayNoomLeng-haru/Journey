// bounded
export type BoundedType = {
    as?: React.ElementType
    children: React.ReactNode
    className?: string
}

// heading
export type HeadingType = {
    as?: 'h1' | 'h2' | 'h3'
    children: React.ReactNode
    className : string
    size?: 'lg' | 'md' | 'sm' | 'xs'
}

// NavButton
export type NavButtonType = {
    link: string
    children: React.ReactNode
    className?: string
}

// TabButton
export type TabButtonType = {
    link: string,
    children: React.ReactNode,
    className? : string
    searchParams: Promise<{id: string}>
}

// Explore Button
export type ExploreBtnType = {
    children: React.ReactNode
    className?: string
    link: string
}

// Pagination Button
export type PaginationButton = {
    variation: 'dotted' | 'numbered'
    children?: React.ReactNode
    className?: string
}

// Header
export type HeaderType = {
    className?: string
    as: 'header'
}

// NavLinkType
export type NavLinkType = {
    prefix: string
    name: string
    url: string
}

// Animation Components
export type AnimationComponent = {
    children: React.ReactNode
}