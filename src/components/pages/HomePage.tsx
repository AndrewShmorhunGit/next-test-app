import { flexCenter } from "app/styles/services/styles";
import { MainHeader } from "components/lib/Components";

export function HomePage() {
  return (
    <div style={{ minHeight: "100%", minWidth: "100%", display: "grid" }}>
      <div style={{ alignSelf: "center" }}>
        <MainHeader text={"Welcome, to the Home Page 🙂"} />
      </div>
    </div>
  );
}
