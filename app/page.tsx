import Hero from "@/components/Hero"
import Main from "@/components/Main"
import HomePage from "./Home/page"
import Container from "@/components/Container"
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Container>
      <HomePage/>
      </Container>
   
    </div>
  )
}
// npx @slicemachine/init@latest --repository richard-portfolio