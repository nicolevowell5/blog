import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/game1.png";
import emotion from "../../Assets/Projects/game4.png";
import editor from "../../Assets/Projects/img4.png";
import chatify from "../../Assets/Projects/img1.png";
import suicide from "../../Assets/Projects/game3.png";
import bitsOfCode from "../../Assets/Projects/img2.png";
import video1 from '../../../src/Assets/video/Encanto+Animation.mp4';
import video2 from '../../../src/Assets/video/game-trailer.mp4';
import video3 from '../../../src/Assets/video/girl_photoshoot_animation-D.mp4';
import video4 from '../../../src/Assets/video/Mammoth_attack.mov';
import video5 from '../../../src/Assets/video/NFT+Animation.mp4';
import video6 from '../../../src/Assets/video/Peacock+Video.mp4';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Perfect Rendering"
              description="The entire scene is rendered for each layer, and actors that belong to a layer are rendered into the Stencil Buffer. Essentially, real-time rendering allows you to see what your final product looks like in real-time."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Skilled Animation"
              description="The entire scene is rendered for each layer, and actors that belong to a layer are rendered into the Stencil Buffer. Essentially, real-time rendering allows you to see what your final product looks like in real-time."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Control Rigging"
              description="The entire scene is rendered for each layer, and actors that belong to a layer are rendered into the Stencil Buffer. Essentially, real-time rendering allows you to see what your final product looks like in real-time."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Solor Game"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Educational Game"
              description="You are a parent and you are trying to relax a little by playing your favorite game. Your child keeps asking you to let them try it... But this game is not suitable for children (because it’s a little scary and not educational at all). Does this situation sound familiar?

At last: a well thought-out, smart, polished, ‘console quality’ educational game pack is out for your kids. Suitable for boys and girls from ages 3 to 18. A pack of 21 different games with 51 variations that educate in various ways like: reflexes, logic, math, memory and knowledge."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Metaverse Game"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
