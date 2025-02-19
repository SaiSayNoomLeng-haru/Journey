'use client'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { AnimationComponent } from '@/app/_lib/definition';

gsap.registerPlugin(useGSAP);

export const SlideInLeftEffect = ({
    children
}: AnimationComponent) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(containerRef.current, {
            x: -200,
            duration: 1,
            opacity: 0,
            ease: 'back'
        })
    }, { scope: containerRef })
    return (
        <div ref={containerRef}>
            {children}
        </div>
    )
}
export const StaggerEffect = () => {
    const containerRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const letters = containerRef.current.querySelectorAll(".letters") as NodeListOf<HTMLElement>;

        gsap.from(letters, {
            scale: 2,
            rotate: 90,
            opacity: 0,
            y: -50,
            duration: 2,
            transformOrigin: "center center",
            stagger: {
                amount: 1,
                from: 'start'
            },
            ease: "elastic.out(1, 0.5)",
        });
    }, { scope: containerRef });

    return (
        <p ref={containerRef} className="block uppercase ~text-7xl/9xl font-belleFair">
            <span className="letters inline-block">s</span>
            <span className="letters inline-block">p</span>
            <span className="letters inline-block">a</span>
            <span className="letters inline-block">c</span>
            <span className="letters inline-block">e</span>
        </p>
    );
};

export const SlideInRightEffect = ({
    children
}: AnimationComponent) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(containerRef.current, {
            x: 200,
            duration: 1,
            opacity: 0,
            ease: 'back',
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef}>
            {children}
        </div>
    )
}

export const SlideInBottomEffect = ({
    children
}: AnimationComponent) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(containerRef.current, {
            y: 200,
            duration: 1,
            opacity: 0,
            rotation: 90,
            ease: 'back'
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef}>
            {children}
        </div>
    )
}