import React from "react";
import Price from "./Price.js";
import Accordion from "react-bootstrap/Accordion";
import "./App.css";

function App() {
  return (
    <>
      <div className="textarea">
        <p>
          <img src="./xp_webTransp.png" className="banner" alt="logo" />
        </p>
        <div className="box">
          <div className="box-header">We provide blockchain solutions</div>

          <div className="box-body">
            <p>
              We are a company specializing in blockchain developement. We
              provide solutions for every part of your web3 stack.
              <br />
              Our main focus are EVM-compatible chains and Starknet but we are
              obviously always open to challenges in new vm.
              <br />
              <br />
              <a href="mailto: info@exhausted-pigeon.xyz">Contact</a>
            </p>
            <br /> Mint our business card (free NFT of a fully onchain svg, in
            Yul): Soon
          </div>
        </div>
      </div>
      <div className="textarea">
        <div className="box">
          <div className="box-body">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What are your main languages?
                </Accordion.Header>
                <Accordion.Body>
                  Solidity, Cairo, Yul, Huff, Vyper
                  <br /> JS/TS, python
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What project are you currently working on?
                </Accordion.Header>
                <Accordion.Body>
                  We are contributing, on a long term basis, to Juicebox and
                  Defi Wonderland
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What are you holding?</Accordion.Header>
                <Accordion.Body>
                  We will soon reflect our onchain balance sheet, live
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;