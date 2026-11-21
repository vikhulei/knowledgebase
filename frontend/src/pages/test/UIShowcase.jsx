import { HomeOuter, HomeInner } from "./UIShowcase.styles"
import MainButton from "../../components/ui/button/MainButton"
import MainInput from "../../components/ui/input/MainInput";

function Home() {
  return (
    <HomeOuter>
      <HomeInner>
        <MainButton>Primary</MainButton>
        <MainButton variant="secondary">Secondary</MainButton>
        <MainButton variant="outline">Outline</MainButton>
        <MainButton variant="danger">Danger</MainButton>
        <div style={{ width: "350px", display: "grid", gap: "16px" }}>
          <MainInput placeholder="Standard input" />

          <MainInput placeholder="Disabled input" disabled />

          <MainInput placeholder="Input with error" error />

          <MainInput type="email" placeholder="Email address" />

          <MainInput type="password" placeholder="Password" />
        </div>
      </HomeInner>
    </HomeOuter>
  )
}

export default Home