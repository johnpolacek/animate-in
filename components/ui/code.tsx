"use client"
import React, { useState, useEffect } from "react"
import Prism from "prismjs"
import "prismjs/components/prism-jsx"
import cn from "mxcn"
import { Button } from "./button"
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline"

function Code({ code, language, className, buttonPosition="inner" }: { code: string, language: string, className?: string, buttonPosition?: "inner" | "outer" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (code) {
      Prism.highlightAll()
    }
  }, [code])

  const handleCopy = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 4000);
    }
  };

  let buttonStyles;
  if (buttonPosition === "inner") {
    buttonStyles = "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all ease-in-out"
  } else {
    buttonStyles = "w-full text-center"
  }

  return (
    <div className={cn("relative group", className)}>
      <pre className="!opacity-100 border border-slate-200 rounded !bg-slate-50 text-left p-8 !text-sm">
        <code className={language}>{code}</code>
      </pre>
      <div className={buttonStyles}>
        <Button size="sm" className="bg-white" variant="outline" onClick={handleCopy}>
          {copied ? (
            <>
              <CheckIcon className="w-4 h-4 relative -left-2 text-green-600" />Copied
            </>
          ) : (
            <>
              <ClipboardIcon className="w-4 h-4 relative -left-2 opacity-60" />Copy
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

export default Code
