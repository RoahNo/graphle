import React, { useEffect, useState } from 'react';
import { Button, Container, Fade, Nav, Navbar } from 'react-bootstrap';
import CanvasDraw from 'react-canvas-draw';
import './Header.css';

type HeaderProps = {
  canvasRef: () => CanvasDraw;
};

function Header(props: HeaderProps) {
  const { canvasRef } = props;
  const [show, setShow] = useState(false);

  const handleMouseMovement = (ev: MouseEvent) => {
    // If the mouse is in the upper 10% of the screen
    if (ev.clientY < window.innerHeight / 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMovement);
    return () => {
      window.removeEventListener('mouseenter', handleMouseMovement);
    };
  });

  return (
    <Fade in={show} className="navbar-detection">
      <div>
        <Navbar fixed="top">
          <Container>
            <Nav>
              <Button
                variant="dark"
                size="sm"
                onClick={() => canvasRef().clear()}
              >
                Clear
              </Button>
            </Nav>
            <Nav className="justify-content-center">
              <Navbar.Text as="h2" className="graphle-logo">
                Graphle - Try to graph the equation!
              </Navbar.Text>
            </Nav>
            <Nav className="justify-content-end">
              <Button
                variant="dark"
                size="sm"
                onClick={() => alert('Processing guess... wait a second...')}
              >
                Submit
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </Fade>
  );
}

export default Header;
