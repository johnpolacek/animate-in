"use client"
import React, { useEffect, useState } from 'react';
import AnimateIn from '../animation/AnimateIn';
import FadeIn from '../animation/FadeIn';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Code from '@/components/ui/code';
import Image from 'next/image';
import { getRandomImage, getAnimateInCode, getRandomImageKey } from '../utils';
import cn from 'mxcn';
import { ArrowPathIcon } from '@heroicons/react/24/solid'

export function Demo() {
  const [ animationKey, setAnimationKey ] = useState(0);
  const [ imageKey, setImageKey ] = useState(getRandomImageKey());
  const [ delay, setDelay ] = useState<number | undefined>(undefined);
  const [ duration, setDuration ] = useState<number | undefined>(undefined)
  const [ scaleIn, setScaleIn ] = useState("")
  const [ flyIn, setFlyIn ] = useState("")
  const [ rotateIn, setRotateIn ] = useState("")
  const [ skewIn, setSkewIn ] = useState("")
  const [ blurIn, setBlurIn ] = useState("")
  const [ ease, setEase ] = useState("ease-in-out")
  const [ randomImage, setRandomImage ] = useState("")

  const handleClick = () => {
    setAnimationKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    if (flyIn || scaleIn || rotateIn || skewIn || blurIn || ease) setAnimationKey(prevKey => prevKey + 1);
  }, [flyIn, scaleIn, rotateIn, skewIn, blurIn, ease])

  useEffect(() => {
    setRandomImage(getRandomImage(imageKey));
  }, []);

  const animateFrom = cn("opacity-0", scaleIn, flyIn, rotateIn, skewIn, blurIn)
  const animateTo = cn("opacity-100", scaleIn ? "scale-100" : "", flyIn ? "translate-y-0 translate-x-0" : "", rotateIn ? "rotate-0" : "", skewIn ? "skew-0" : "", blurIn ? "blur-none" : "")

  return (
    <div className="flex flex-col w-full items-center justify-center gap-4">
      <FadeIn delay={3000} className="p-16 border rounded-xl overflow-hidden relative">
        <Button variant="ghost" className="absolute top-4 hover:bg-transparent right-0" onClick={() => {
          setRandomImage(getRandomImage(imageKey + 1))
          setImageKey((prevCount: number) => prevCount + 1);
          setAnimationKey(prevKey => prevKey + 1);
        }}>
          <ArrowPathIcon style={{transform: `rotate(${imageKey * 180}deg)`}} className="h-6 w-6 mr-2 transition-all duration-300 ease-in-out text-purple-600" />
        </Button>
        <AnimateIn 
          key={animationKey} 
          from={animateFrom} 
          to={animateTo}
          className={cn("font-bold text-4xl text-purple-600")}
          duration={duration}
          delay={delay}
          style={ease ? {transitionTimingFunction: ease} : {}}
        >
          {
            randomImage && (<Image width={180} height={180} alt="Animate Me!" className="opacity-90" src={`icons/${randomImage}.svg`} />)
          }
        </AnimateIn>
      </FadeIn>
      <FadeIn delay={4000} from="scale-0" to="scale-100">
        <Button className="h-auto text-lg hover:scale-110 hover:text-purple-600 hover:bg-white duration-300 transition-all pl-6 pr-8 text-purple-600 font-medium" variant="outline" onClick={handleClick}>
          <ArrowPathIcon style={{transform: `rotate(${animationKey * 180}deg)`}} className="h-6 w-6 mr-2 transition-all duration-300 ease-in-out" />
          Animate In
        </Button>
      </FadeIn>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
        <FadeIn from="translate-y-16" to="translate-y-0" delay={4100} className="flex flex-col gap-2">
          <Label className="pl-2" htmlFor="duration">Delay (seconds)</Label>
          <Select value={delay?.toString()} onValueChange={(value) => {
            setDelay(parseInt(value))
            setAnimationKey(prevKey => prevKey + 1);
          }}>
            <SelectTrigger id="delay" className="w-[180px]">
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">None</SelectItem>
              <SelectItem value="500">500ms</SelectItem>
              <SelectItem value="1000">1000ms</SelectItem>
              <SelectItem value="2000">2000ms</SelectItem>
              <SelectItem value="4000">4000ms</SelectItem>
            </SelectContent>
          </Select>
        </FadeIn>
        <FadeIn from="translate-y-16" to="translate-y-0" delay={4200} className="flex flex-col gap-2">
          <Label className="pl-2" htmlFor="duration">Duration</Label>
          <Select value={duration?.toString()} onValueChange={(value) => {
            setDuration(parseInt(value))
            setAnimationKey(prevKey => prevKey + 1);
          }}>
            <SelectTrigger id="duration" className="w-[180px]">
              <SelectValue placeholder="500ms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="100">100ms</SelectItem>
              <SelectItem value="300">300ms</SelectItem>
              <SelectItem value="500">500ms</SelectItem>
              <SelectItem value="1000">1000ms</SelectItem>
              <SelectItem value="2000">2000ms</SelectItem>
              <SelectItem value="4000">4000ms</SelectItem>
            </SelectContent>
          </Select>
        </FadeIn>
        <FadeIn from="translate-y-16" to="translate-y-0" delay={4300} className="flex flex-col gap-2">
          <Label className="pl-2" htmlFor="scaleIn">Scale In</Label>
          <Select value={scaleIn.includes('-1') || scaleIn.includes('[') ? "" : scaleIn} onValueChange={(value) => {
            setScaleIn(value === "none" ? "" : value)
          }}>
            <SelectTrigger id="scaleIn" className="w-[180px]">
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="scale-90">Subtle</SelectItem>
              <SelectItem value="scale-50">Half</SelectItem>
              <SelectItem value="scale-0">Full</SelectItem>
              <SelectItem value="scale-x-90">Subtle Horizontal</SelectItem>
              <SelectItem value="scale-x-50">Half Horizontal</SelectItem>
              <SelectItem value="scale-x-0">Full Horizontal</SelectItem>
              <SelectItem value="scale-y-90">Subtle Vertical</SelectItem>
              <SelectItem value="scale-y-50">Half Vertical</SelectItem>
              <SelectItem value="scale-y-0">Full Vertical</SelectItem>
            </SelectContent>
          </Select>
        </FadeIn>
        <FadeIn from="translate-y-16" to="translate-y-0" delay={4400} className="flex flex-col gap-2">
          <Label className="pl-2" htmlFor="shrinkIn">Shrink In</Label>
          <Select value={scaleIn} onValueChange={(value) => {
            setScaleIn(value === "none" ? "" : value)
          }}>
            <SelectTrigger id="shrinkIn" className="w-[180px]">
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="scale-105">Subtle</SelectItem>
              <SelectItem value="scale-125">Small</SelectItem>
              <SelectItem value="scale-150">Medium</SelectItem>
              <SelectItem value="scale-[2]">Large</SelectItem>
              <SelectItem value="scale-[4]">XL</SelectItem>
            </SelectContent>
          </Select>
        </FadeIn>
        <FadeIn from="translate-y-16" to="translate-y-0" delay={4500} className="flex flex-col gap-2">
          <Label className="pl-2" htmlFor="flyIn">Fly In</Label>
          <Select value={flyIn} onValueChange={(value) => {
            setFlyIn(value === "none" ? "" : value)
          }}>
            <SelectTrigger id="flyIn" className="w-[180px]">
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="translate-y-4">From Below - Subtle</SelectItem>
              <SelectItem value="translate-y-8">From Below - Small</SelectItem>
              <SelectItem value="translate-y-16">From Below - Medium</SelectItem>
              <SelectItem value="translate-y-32">From Below - Big</SelectItem>
              <SelectItem value="-translate-y-4">From Above - Subtle</SelectItem>
              <SelectItem value="-translate-y-8">From Above - Small</SelectItem>
              <SelectItem value="-translate-y-16">From Above - Medium</SelectItem>
              <SelectItem value="-translate-y-32">From Above - Big</SelectItem>
              <SelectItem value="translate-x-4">From Left - Subtle</SelectItem>
              <SelectItem value="translate-x-8">From Left - Small</SelectItem>
              <SelectItem value="translate-x-16">From Left - Medium</SelectItem>
              <SelectItem value="translate-x-32">From Left - Big</SelectItem>
              <SelectItem value="-translate-x-32">From Right - Subtle</SelectItem>
              <SelectItem value="-translate-x-8">From Right - Small</SelectItem>
              <SelectItem value="-translate-x-16">From Right - Medium</SelectItem>
              <SelectItem value="-translate-x-32">From Right - Big</SelectItem>
            </SelectContent>
          </Select>
        </FadeIn>
        <FadeIn from="translate-y-16" to="translate-y-0" delay={4600} className="flex flex-col gap-2">
          <Label className="pl-2" htmlFor="rotateIn">Rotate In</Label>
          <Select value={rotateIn} onValueChange={(value) => {
            setRotateIn(value === "none" ? "" : value)
          }}>
            <SelectTrigger id="rotateIn" className="w-[180px]">
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="rotate-12">Clockwise 12°</SelectItem>
              <SelectItem value="rotate-45">Clockwise 45°</SelectItem>
              <SelectItem value="rotate-90">Clockwise 90°</SelectItem>
              <SelectItem value="rotate-180">Clockwise 180°</SelectItem>
              <SelectItem value="-rotate-12">Counter Clockwise 12°</SelectItem>
              <SelectItem value="-rotate-45">Counter Clockwise 45°</SelectItem>
              <SelectItem value="-rotate-90">Counter Clockwise 90°</SelectItem>
              <SelectItem value="-rotate-180">Counter Clockwise 180°</SelectItem>
            </SelectContent>
          </Select>
        </FadeIn>
        <FadeIn from="translate-y-16" to="translate-y-0" delay={4700} className="flex flex-col gap-2">
          <Label className="pl-2" htmlFor="skewIn">Skew In</Label>
          <Select value={skewIn} onValueChange={(value) => {
            setSkewIn(value === "none" ? "" : value)
          }}>
            <SelectTrigger id="skewIn" className="w-[180px]">
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="skew-x-6">Horizontal 6°</SelectItem>
              <SelectItem value="skew-x-12">Horizontal 12°</SelectItem>
              <SelectItem value="skew-x-[45deg]">Horizontal 45°</SelectItem>
              <SelectItem value="skew-y-6">Vertical 6°</SelectItem>
              <SelectItem value="skew-y-12">Vertical 12°</SelectItem>
              <SelectItem value="skew-y-[45deg]">Vertical 45°</SelectItem>
            </SelectContent>
          </Select>
        </FadeIn>
        <FadeIn from="translate-y-16" to="translate-y-0" delay={4800} className="flex flex-col gap-2">
          <Label className="pl-2" htmlFor="blurIn">Blur In</Label>
          <Select value={blurIn} onValueChange={(value) => {
            setBlurIn(value === "none" ? "" : value)
          }}>
            <SelectTrigger id="blurIn" className="w-[180px]">
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="blur-sm">Small</SelectItem>
              <SelectItem value="blur">Medium</SelectItem>
              <SelectItem value="blur-lg">Large</SelectItem>
              <SelectItem value="blur-3xl">Max</SelectItem>
            </SelectContent>
          </Select>
        </FadeIn>
      </div>
      <FadeIn from="translate-y-16" to="translate-y-0" delay={4800} className="flex flex-col gap-2">
        <Label className="pl-2" htmlFor="ease">Easing</Label>
        <Select value={ease} onValueChange={(value) => {
          setEase(value)
        }}>
          <SelectTrigger id="ease" className="w-[180px]">
            <SelectValue placeholder="None" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ease-in-out">Ease In and Out</SelectItem>
            <SelectItem value="cubic-bezier(0.25, 0.4, 0.55, 1.4)">Elastic</SelectItem>
            <SelectItem value="cubic-bezier(.09,.9,.89,2.19)">Big Elastic</SelectItem>
          </SelectContent>
        </Select>
      </FadeIn>
      <FadeIn delay={5000}>
        <Code language="language-jsx" buttonPosition="outer" code={getAnimateInCode({animateFrom, animateTo, delay, duration, ease})} />
      </FadeIn>
    </div>
  );
}
