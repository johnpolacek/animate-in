import React from 'react';
import FadeIn from '../animation/FadeIn';

const Logo = () => (
  <div className="pointer-events-none flex justify-center w-full pt-4 pb-8">
    <div className="grid grid-cols-2 grid-rows-2 w-16 h-16 gap-1 -rotate-45 opacity-50">
      <FadeIn className="border-[3px] border-purple-500 duration-1000" animateFromClassname="-rotate-180" animateToClassname="rotate-0"></FadeIn>
      <FadeIn animateFromClassname="translate-x-6" animateToClassname="translate-x-0" delay={700} className="border-[3px] border-purple-500 duration-1000"></FadeIn>
      <FadeIn animateFromClassname="translate-y-6" animateToClassname="translate-y-0" delay={900} className="border-[3px] border-purple-500 duration-700"></FadeIn>
      <div></div>
    </div>
  </div>
);

export default Logo;
