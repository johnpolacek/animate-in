import FadeIn from "../animation/FadeIn"

export function Footer() {
  return (
    <footer className="flex justify-center font-mono">
      <FadeIn delay={5000} className="flex flex-col gap-4 p-12 border-t text-center opacity-70 duration-1000">
        <div>Created by John Polacek</div>
        <div className="flex flex-wrap gap-8 justify-center pb-8">
          <a className="underline text-blue-600" href="https://johnpolacek.com">johnpolacek.com</a>
          <a className="underline text-blue-600" href="https://twitter.com/johnpolacek">@johnpolacek</a>
        </div>
        <div className="pb-8">Travel Glyph Icon Set from <a className="underline text-blue-600" href="https://www.svgrepo.com/collection/travel-glyph-icons/">SVGRepo</a></div>
        <div className="pb-2">Also by John Polacek</div>
        <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center pb-8">
          <a className="underline text-blue-600" href="https://bucket-cms.com/">bucket-cms</a>
          <a className="underline text-blue-600" href="https://notyet.news/">notyet.news</a>
          <a className="underline text-blue-600" href="https://botlywood.ca">botlywood.ca</a>
          <a className="underline text-blue-600" href="https://botluck.fun/">botluck.fun </a>
          <a className="underline text-blue-600" href="https://date-range-picker-for-shadcn-demo.vercel.app/">date range picker</a>
          <a className="underline text-blue-600" href="https://tweenpages.vercel.app/">tweenpages</a>
          <a className="underline text-blue-600" href="https://animated-gradient-background-generator.netlify.app/">anim-bg-gen</a>
          <a className="underline text-blue-600" href="https://www.routechat.com/">routechat</a>
          <a className="underline text-blue-600" href="https://commizio.com/">commizio</a>
          <a className="underline text-blue-600" href="https://supportmy.team/">supportmy.team</a>
          <a className="underline text-blue-600" href="https://colortocolor.com/">colortocolor.com</a>
          <a className="underline text-blue-600" href="https://design-system-playground.netlify.app/">design-system-playground</a>
          <a className="underline text-blue-600" href="https://nextjs-scraper-playground.vercel.app/">web-scraper-playground</a>
          <a className="underline text-blue-600" href="https://hellonext.vercel.app/">hellonext.app</a>
          <a className="underline text-blue-600" href="https://johnpolacek.github.io/expressive-css/">expressive-css</a>
          <a className="underline text-blue-600" href="https://johnpolacek.github.io/tweendeck/">tweendeck</a>
          <a className="underline text-blue-600" href="https://johnpolacek.github.io/open-source-for-fame-and-fortune/">os-fame-fortune</a>
          <a className="underline text-blue-600" href="https://manly-man.net/">manly-man-passwords</a>
          <a className="underline text-blue-600" href="https://www.youtube.com/watch?app=desktop&v=eaZSWxpvO9Q/">match-the-letter</a>
          <a className="underline text-blue-600" href="https://johnpolacek.github.io/rethinking-css/">rethinking-css</a>
          <a className="underline text-blue-600" href="https://johnpolacek.github.io/free-summer/">free-summer</a>
          <a className="underline text-blue-600" href="https://johnpolacek.github.io/Responsivator/">responsivator</a>
          <a className="underline text-blue-600" href="https://johnpolacek.github.io/stacktable.js/">stacktable</a>
          <a className="underline text-blue-600" href="https://johnpolacek.github.io/BigVideo.js/">bigvideo.js</a>
          <a className="underline text-blue-600" href="https://johnpolacek.github.io/scrollorama/">scrollorama</a>
        </div>
      </FadeIn>
    </footer>
  )
}
