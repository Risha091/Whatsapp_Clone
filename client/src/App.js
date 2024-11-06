import Messanger from "./components/Messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";

function App() {

  const clientId = '840887280729-bv7ngb06016ic6e374m3jtgn74j9nbge.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messanger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
