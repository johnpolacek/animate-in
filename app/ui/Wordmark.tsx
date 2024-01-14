import React from 'react';
import FadeIn from '../animation/FadeIn';

const Wordmark = () => (
  <h1 aria-label="Animate In" className="text-4xl sm:text-6xl text-center mb-4 font-light font-mono">
    <FadeIn as="span" className="duration-1000 text-gray-300 font-sans relative -top-1 -left-4 scale-75 inline-block" delay={2100} aria-hidden="true">{"<"}</FadeIn>
    <FadeIn as="span" className="duration-1000" delay={1500} aria-hidden="true">A</FadeIn>
    <FadeIn as="span" className="duration-700 relative left-[2px]" delay={2300} aria-hidden="true">n</FadeIn>
    <FadeIn as="span" className="duration-1000" delay={1600} aria-hidden="true">i</FadeIn>
    <FadeIn as="span" className="duration-700 pl-[4px] pr-[3px]" delay={2400} aria-hidden="true">m</FadeIn>
    <FadeIn as="span" className="duration-700 -ml-px" delay={2200} aria-hidden="true">a</FadeIn>
    <FadeIn as="span" className="duration-700 -ml-[2px]" delay={2100} aria-hidden="true">t</FadeIn>
    <FadeIn as="span" className="duration-700 -ml-px" delay={2000} aria-hidden="true">e</FadeIn>
    <span className="text-xl">{" "}</span>
    <FadeIn as="span" className="duration-1000" delay={2500} aria-hidden="true">I</FadeIn>
    <FadeIn as="span" className="duration-700" delay={2000} aria-hidden="true">n</FadeIn>
    <FadeIn as="span" className="duration-1000 text-gray-300 font-sans relative -top-1 -right-4 scale-[66%] inline-block" delay={2300} aria-hidden="true">{"/"}</FadeIn>
    <FadeIn as="span" className="duration-1000 text-gray-300 font-sans relative -top-1 -right-4 scale-75 inline-block" delay={2500} aria-hidden="true">{">"}</FadeIn>
  </h1>
);

export default Wordmark;
