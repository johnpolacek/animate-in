"use client"
import React from 'react';
import FadeIn from '../animation/FadeIn';
import GistComponent from '../ui/GistComponent';
import { Button } from '@/components/ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export function Source() {
  return (
    <FadeIn delay={5000} className="flex flex-col gap-4 pb-8 px-4 w-full max-w-4xl opacity-80">
      <h2 className="text-2xl font-medium">Installation</h2>
      <p>If you are using <a className="underline text-blue-600 font-medium" href="https://ui.shadcn.com/">shadcn</a> in your project, then you already have everything you need, just <a className="underline text-blue-600 font-medium" href="https://gist.github.com/johnpolacek/c7ddd607a4d5dbf43f38ae7266f6de18">download AnimateIn.tsx</a> and add it to your components.</p>
      <p>Otherwise, you’ll want to <a className="underline text-blue-600 font-medium" href="https://tailwindcss.com/docs/installation">install Tailwind</a> as well as <code className="bg-slate-50 px-2 py-1 border">mxcn</code> which is a <a className="underline text-blue-600 font-medium" href="https://github.com/ahmadawais/mxcn">helpful utility</a> for merging tailwind classes.</p>
      <p>Like shadcn, <span className="opacity-60 scale-75 inline-block px-px">{"<"}</span><span className="text-purple-700 font-medium">AnimateIn</span><span className="opacity-60 scale-75 inline-block px-px">{"/>"}</span> is meant to be a re-usable component that you can copy and paste into your apps and customize to your needs. The code is yours.</p>
      <div className="text-center pt-8">
        <a href="https://gist.github.com/johnpolacek/c7ddd607a4d5dbf43f38ae7266f6de18">
          <Button className="hover:scale-105 pl-6 text-lg" size="lg">
            <GitHubLogoIcon className="mr-3 w-5 h-5" /> View on Github
          </Button>
        </a>
      </div>
      <div className="flex flex-col justify-center gap-4 w-full">
        <GistComponent gistId="c7ddd607a4d5dbf43f38ae7266f6de18" language="language-jsx" />
      </div>
    </FadeIn>
  );
}
