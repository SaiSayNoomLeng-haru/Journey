'use client'

import { HeaderType, NavLinkType } from "@/app/_lib/definition"
import Image from "next/image"
import Link from "next/link"
import NavButton from "./NavButton"
import clsx from "clsx"
import { useRef, useState } from "react"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
import { SlideInBottomEffect } from "./Animations"

gsap.registerPlugin(useGSAP);

const Header = ({
    as: Component
}: HeaderType) => {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline();

        tl.fromTo(containerRef.current?.children, {
            y: -20,
            opacity: 0,
        },
            {
                opacity: 1,
                duration: 1,
                y: 0,
                stagger: {
                    amount: 1,
                    from: 'start'
                },
                ease: 'power2.out'
            })

    }, { dependencies: [navOpen] })

    const navLinks = [
        { name: 'home', url: '/', prefix: '00' },
        { name: 'destination', url: '/destination', prefix: '01' },
        { name: 'crew', url: '/crew', prefix: '02' },
        { name: 'technology', url: '/technology', prefix: '03' },
    ];

    const MOBILE_NAV = clsx('max-md:flex-col max-md:fixed max-md:z-[100] max-md:top-5 max-md:right-0 max-md:left-[50vw] max-md:bottom-0 max-md:px-2 max-md:pt-20 max-md:justify-start max-md:items-stretch max-md:backdrop-blur-lg max-md:backdrop-opacity-1 max-md:translate-x-full', navOpen && 'max-md:!translate-x-0');

    return (
        <Component
            className="flex justify-between items-center p-5 absolute min-h-[4rem] indent-0 w-full z-50 text-white">
            <SlideInBottomEffect>
                <Link
                    href='/'>
                    <Image
                        src='/assets/images/logo.png'
                        width={50}
                        height={50}
                        alt="Space Tourism Logo"
                        aria-label="Space Tourism Logo"
                        className="max-w-[50px]"
                        priority />
                </Link>
            </SlideInBottomEffect>

            <button
                className="md:hidden absolute z-[110] top-10 right-5"
                onClick={() => setNavOpen((prevOpen) => !prevOpen)}
                aria-expanded={navOpen}
                aria-controls="#navbar"
                aria-label="Mobile Nav Toggle Button"
            >
                {navOpen
                    ? (<Image
                        width={20}
                        height={20}
                        src="/assets/images/icon-close.svg"
                        alt="nav-close" />)
                    : (<Image
                        width={20}
                        height={20}
                        src="/assets/images/icon-hamburger.svg"
                        alt="nav-open" />)
                }
            </button>

            <nav
                role="navigation"
                aria-label="Main Menu"
                className={clsx('flex gap-5 md:items-center', MOBILE_NAV)}
                id="navbar"
                ref={containerRef}
            >
                {
                    navLinks.map((link: NavLinkType) => (
                        <NavButton
                            key={link.name}
                            link={link.url}
                            className="flex items-center gap-2">
                            <span>{link.prefix}</span>
                            <span>{link.name}</span>
                        </NavButton>
                    ))
                }
            </nav>
        </Component>
    )
}

export default Header