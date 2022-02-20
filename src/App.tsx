import React, { useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  let canvasRef: CanvasDraw;

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const setCanvasRef = (ref: CanvasDraw) => {
    canvasRef = ref;
  };

  return (
    <div className="App">
      <Header canvasRef={() => canvasRef} />
      <CanvasDraw
        ref={(ref) => setCanvasRef(ref!)}
        canvasHeight={dimensions.height}
        canvasWidth={dimensions.width}
      />
    </div>
  );
}

export default App;
