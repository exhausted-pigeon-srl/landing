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
          <div className="box-header">
            <Price />
          </div>

          <div className="box-body">
            <p> placeholder for the cool thing </p>
          </div>
        </div>
      </div>

      <div className="textarea">
        <div className="box">
          <div className="box-body">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header> ?</Accordion.Header>
                <Accordion.Body>foo</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header> ?</Accordion.Header>
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
