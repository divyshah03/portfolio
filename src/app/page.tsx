import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Later: add About, Projects, Contact components here */}
      </main>
      <Footer />
    </>
  )
}