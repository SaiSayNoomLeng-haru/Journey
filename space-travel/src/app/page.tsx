import { Metadata } from "next";
import clsx from "clsx";

import Bounded from "@/components/Bounded";
import ExploreBtn from "@/components/ExploreBtn";
import { SlideInBottomEffect, SlideInLeftEffect, SlideInRightEffect, StaggerEffect } from "@/components/Animations";

export const generateMetadata = async (): Promise<Metadata> => {
  return ({
    title: 'Home'
  })
}

export default function Home() {

  return (
    <Bounded
      className={clsx('md:home-bg-medium lg:home-bg-large home-bg-small text-brand-white relative max-lg:place-items-center lg:place-items-end px-20 pb-20')}
    >
      <div
        className="col-start-1 max-lg:row-start-1 max-lg:col-span-full lg:col-span-6 max-lg:text-center font-barlow text-accent flex flex-col gap-4">
        <SlideInLeftEffect>
          <p className="uppercase ~text-2xl/3xl font-thin">So, you want to travel to</p>
        </SlideInLeftEffect>

        <StaggerEffect />

        <SlideInRightEffect>
          <p className="~text-sm/lg">Let&apos;s face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!</p>
        </SlideInRightEffect>
      </div>

      <div className="max-lg:col-start-1 max-lg:row-start-2 max-lg:place-self-center lg:self-end lg:justify-self-center lg:col-start-8 col-span-full">

        <SlideInBottomEffect>
          <ExploreBtn
            link='/destination'>
            <span>Explore</span>
          </ExploreBtn>
        </SlideInBottomEffect>
      </div>
    </Bounded>
  );
}
