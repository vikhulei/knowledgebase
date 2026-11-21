import { HomeOuter, HomeInner } from "./UIShowcase.styles"
import MainButton from "../../components/ui/button/MainButton"

function Home() {
  return (
    <HomeOuter>
      <HomeInner>
      <MainButton>Click Me</MainButton>
      </HomeInner>
    </HomeOuter>
  )
}

export default Home