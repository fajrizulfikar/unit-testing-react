import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import App from './App';

describe("Test Toggle using Enzyme", () => {    
  afterEach(cleanup);
  
  it("render Toggle component", () => {
    const { getByText, queryByText, getByDisplayValue } = render(<App/>)

    expect(getByText("On")).toBeDefined();
    expect(queryByText("Off")).toBeNull();

    fireEvent.click(getByDisplayValue("toggle"));

    expect(getByText("Off")).toBeDefined();
    expect(queryByText("On")).toBeNull();
  });
});