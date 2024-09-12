import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { FaBlender } from "react-icons/fa";
import {
  DiUnitySmall,
  DiPython,
} from "react-icons/di";
import {
  SiSolidity,
  SiWebgl,
  SiUnrealengine,
  SiAdobephotoshop,
  SiWeb3Dotjs,
  SiBlockchaindotcom,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiUnitySmall />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebgl />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWeb3Dotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlockchaindotcom />
      </Col>
    </Row>
  );
}

export default Techstack;
