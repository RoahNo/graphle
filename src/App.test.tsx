import { cleanup, render } from '@testing-library/react';
import React from 'react';
import CanvasDraw from 'react-canvas-draw';

describe('Home Page', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(cleanup);

  test('renders the CanvasDraw element', () => {
    const { getByTestId } = render(<CanvasDraw data-testId="canvas" />, { container });
    expect(getByTestId('canvas')).toBeInTheDocument();
  });
});
