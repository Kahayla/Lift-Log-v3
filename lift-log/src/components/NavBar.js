import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="p-4">
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/AddSession" className="text-white">
                      Add Session
                    </a>
                  </li>
                  <li>
                    <a href="/AllSessions" className="text-white">
                      View Session
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <nav className="navbar navbar-dark">
              <button
                className="navbar-toggler mx-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
