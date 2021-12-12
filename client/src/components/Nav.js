import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <div>
      <h2>
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
  );
}

export default Nav();
