import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="textarea">
        <p>
          <img src="./xp_webTransp.png" className="banner" alt="logo" />
        </p>
        <br />
        <div className="box">
          <div className="box-body">
            <p>
              Exhausted Pigeon provides smart contract engineering and solutions
              for every part of your web3 stack.
            </p>

            <p>
              Our main focus are EVM-compatible chains and Starknet - we use
              Solidity, Cairo, Vyper, Yul(p), Huff, or even raw bytecode.
              <br />
              This site is ugly because we're too busy deploying things.
            </p>

            <p>
              <a href="mailto: info@exhausted-pigeon.xyz">Contact</a>
            </p>
          </div>
        </div>
      </div>

      <br />
      <div className="box">
        <div className="box-body">
          <p>Got code?</p>

          <p>
            Check out our{" "}
            <a
              href="https://github.com/exhausted-pigeon-srl"
              target="_blank"
              rel="noreferrer"
            >
              GitHub organisation
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/drgorillamd"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              DrGorilla.eth repo.
            </a>
            <br />
            We currently contribute to:{" "}
            <a
              href="https://github.com/jbx-protocol"
              target="_blank"
              rel="noreferrer"
            >
              Juicebox protocol
            </a>
            ,{" "}
            <a
              href="https://github.com/defi-wonderland"
              target="_blank"
              rel="noreferrer"
            >
              Defi Wonderland
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
