import "./App.css";

import { useAccount } from "wagmi";
import { ConnectKitProvider, ConnectKitButton } from "connectkit";
import { Account, Connect, NetworkSwitcher, TextBoxes } from "./components";

export function App() {
  const { isConnected } = useAccount();

  return (
    <>
      <ConnectKitProvider>
        <ConnectKitButton />
        <TextBoxes />
      </ConnectKitProvider>
    </>
  );
}
