import Map from "./Map.js";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <>
      <h1>Sackington</h1>

      <div>
        <Link to="/lidos">Lido's</Link>
      </div>
      <Map />
    </> //react fragment
  );
}
