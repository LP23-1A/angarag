import Sun from "./icon";

export default function Head() {
  return (
    <header className="all">
      <div className="flx">
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="flx">
          <ul className="flx lis">
            <li>About</li>
            <li>Work</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
          <Sun />
          <button className="down">Download SV</button>
        </div>
      </div>
    </header>
  );
}
