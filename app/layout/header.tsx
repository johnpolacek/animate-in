import Wordmark from "../ui/Wordmark"
import Logo from "../ui/Logo"
import FadeIn from "../animation/FadeIn"

export function Header() {
  return (
    <header className="shrink">
      <Logo />
      <Wordmark />
      <FadeIn delay={3000} className="duration-1000 mb-8">
        <h2 className="sm:text-lg text-center text-gray-700 font-light pb-1">React UI Component for animating elements in with Tailwind and CSS Animation</h2>
        <h3 className="text-center text-gray-700 font-light italic">(...and plays nice with shadcn)</h3>
      </FadeIn>
    </header>
  )
}
