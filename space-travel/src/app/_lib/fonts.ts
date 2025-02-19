import localFont from 'next/font/local';

export const barlow = localFont({
    src: [
        {
            path: '../fonts/Barlow/Barlow-Thin.ttf',
            weight: '100',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow/Barlow-ExtraLight.ttf',
            weight: '200',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow/Barlow-Light.ttf',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow/Barlow-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow/Barlow-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow/Barlow-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow/Barlow-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow/Barlow-ExtraBold.ttf',
            weight: '800',
            style: 'normal'
        }
    ],
    variable: '--font-barlow'
});

export const condensed = localFont({
    src: [
        {
            path: '../fonts/Barlow_Condensed/BarlowCondensed-Thin.ttf',
            weight: '100',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow_Condensed/BarlowCondensed-ExtraLight.ttf',
            weight: '200',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow_Condensed/BarlowCondensed-Light.ttf',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow_Condensed/BarlowCondensed-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow_Condensed/BarlowCondensed-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow_Condensed/BarlowCondensed-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../fonts/Barlow_Condensed/BarlowCondensed-ExtraBold.ttf',
            weight: '800',
            style: 'normal'
        }
    ],
    variable: '--font-condensed'
})

export const belleFair = localFont({
    src: '../fonts/BelleFair/Bellefair-Regular.ttf',
    variable: '--font-belleFair'
})