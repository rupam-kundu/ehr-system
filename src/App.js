import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="jumbotron">
      <h1 className="display-4" style={{ textAlign: "center" }}>
        EHR system
      </h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
