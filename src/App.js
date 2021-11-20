import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import PatientsList from "./components/patients-list";
Amplify.configure(awsExports);

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand" style={{ marginLeft: "45%" }}>
          <h1>EHR system</h1>
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item" style={{ marginLeft: "220%" }}>
            <AmplifySignOut />
          </li>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-2" style={{ paddingLeft: "0%" }}>
            <div>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <div
                    class="card text-white bg-dark"
                    style={{width: "18rem", borderRadius: "0%"}}
                  >
                    <div class="card-body">
                      <Link to={"/patients"} className="nav-link">
                        <h5 class="card-title" style={{ color: "white" }}>
                          View patients
                        </h5>
                      </Link>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    class="card text-white bg-dark"
                    style={{ width: "18rem", borderRadius: "0%" }}
                  >
                    <div class="card-body">
                      <Link to={""} className="nav-link">
                        <h5 class="card-title" style={{ color: "white" }}>
                          Link
                        </h5>
                      </Link>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    class="card text-white bg-dark"
                    style={{ width: "18rem", borderRadius: "0%" }}
                  >
                    <div class="card-body">
                      <Link to={""} className="nav-link">
                        <h5 class="card-title" style={{ color: "white" }}>
                          Link
                        </h5>
                      </Link>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="card text-white bg-dark" style={{width: "18rem", borderRadius: "0%"}}>
                    <div class="card-body">
                      <Link to={""} className="nav-link">
                        <h5 class="card-title" style={{ color: "white" }}>Link</h5>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-10">
            <div class="row">
              <div class="col-10">
                <div>
                  <Switch>
                    <Route
                      exact
                      path={["/", "/patients"]}
                      component={PatientsList}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
