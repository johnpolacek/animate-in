import { Header } from "./header"
import { Footer } from "./footer"
import { Demo } from "../main/demo"
import { Source } from "../main/source"

export function Home() {
  return (
    <div className="container min-h-screen flex flex-col justify-between mx-auto pt-8">
      <Header />
      <main className="flex flex-col items-center grow pb-16 gap-12">
        <Demo />
        <Source />
      </main>
      <Footer />
    </div>
  )
}
