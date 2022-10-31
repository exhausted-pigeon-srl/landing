import React from "react";
import Profile from "./Profile.js";
import Accordion from "react-bootstrap/Accordion";
import "./App.css";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function App() {
  return (
    <>
      <div className="textarea">
        <p>
          <img src="./xp_webTransp.png" className="banner" alt="logo" />
        </p>
        <div className="box">
          <div className="box-header">FAQ</div>

          <div className="box-body">
            <p>
              We are a company specializing in blockchain developement. While
              our expertise is centered on onchain solutions, we provide
              solutions for every part of your web3 stack.
              <br />
              Our main focus are EVM-compatible chains (Solidity, Vyper, Yul(p),
              Huff, even raw bytecode) and Starknet - we are obviously always
              open to challenges in new vm.
              <br />
              Feel free to mint our fully onchain adaptive svg NFT Business card
              here, available on Arbitrum, Polygon and mainnet:
              <br />
              <WagmiConfig client={client}>
                <Profile />
              </WagmiConfig>
            </p>
          </div>
        </div>
      </div>

      <div className="textarea">
        <div className="box">
          <div className="box-body">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>?</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header></Accordion.Header>
                <Accordion.Body>foo</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header> ?</Accordion.Header>
                <Accordion.Body>foo</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>foo</Accordion.Header>
                <Accordion.Body>foo</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>foo</Accordion.Header>
                <Accordion.Body>foo</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>foo</Accordion.Header>
                <Accordion.Body>foo</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>foo</Accordion.Header>
                <Accordion.Body>foo</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header>foo</Accordion.Header>
                <Accordion.Body>foo</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
