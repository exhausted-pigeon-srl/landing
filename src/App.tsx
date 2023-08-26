import "./App.css";

import { useAccount } from "wagmi";
import { ConnectKitProvider, ConnectKitButton } from "connectkit";
import { TextBoxes, Footer } from "./components";

export function App() {
  const { isConnected } = useAccount();

  return (
    <>
      <ConnectKitProvider>
        <ConnectKitButton />
        <TextBoxes />
        <br></br>
        <Footer />
      </ConnectKitProvider>
    </>
  );
}
