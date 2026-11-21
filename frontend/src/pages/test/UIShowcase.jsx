import { useState } from "react";
import { HomeOuter, HomeInner } from "./UIShowcase.styles"
import MainButton from "../../components/ui/button/MainButton"
import MainInput from "../../components/ui/input/MainInput";
import MainCard from "../../components/ui/card/MainCard";
import MainDialog from "../../components/ui/dialog/MainDialog";

function Home() {

  const [dialogOpen, setDialogOpen] = useState(false);

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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            width: "100%",
          }}
        >
          <MainCard>
            <h4>Default Card</h4>
            <p>Standard card used throughout the Knowledge Base.</p>
          </MainCard>

          <MainCard variant="interactive">
            <h4>Interactive Card</h4>
            <p>Hover over this card to see the effect.</p>
          </MainCard>

          <MainCard variant="outlined">
            <h4>Outlined Card</h4>
            <p>Card with a more prominent border.</p>
          </MainCard>
        </div>

        <MainButton
          variant="danger"
          onClick={() => setDialogOpen(true)}
        >
          Delete Article
        </MainButton>

        <MainDialog
          isOpen={dialogOpen}
          title="Delete article?"
          message="Are you sure you want to delete this article?"
          confirmText="Delete"
          confirmVariant="danger"
          onClose={() => setDialogOpen(false)}
          onConfirm={() => {
            alert("Article deleted (test only)");
            setDialogOpen(false);
          }}
        />

      </HomeInner>
    </HomeOuter>
  )
}

export default Home