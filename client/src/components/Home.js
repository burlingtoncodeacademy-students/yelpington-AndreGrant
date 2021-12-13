import Map from "./Map.js";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <>
      <a href="/">
        <h1 id="sackington-header">Sackington!</h1>
      </a>
      <div>
        <h2 id="restaurant-names">
          {/* links to corresponding  pages */}
          <Link to="/lidos">Lido's</Link>
          <Link to="/macs">Mac's</Link>
          <Link to="/manna">White Manna</Link>
          <Link to="/picco">The Picco Tavern</Link>
          <Link to="/veggie">Veggie Heaven</Link>
          <Link to="/maggs">Maggiano's</Link>
          <Link to="/noches">Noches De Colombia</Link>
          <Link to="/chit">Chit Chat Diner</Link>
        </h2>
      </div>
      <Map />
    </> //react fragment
  );
}
