import React from "react";
// import { render } from "@testing-library/react";
import { render, fireEvent } from '../../test-utils';
import { Featured } from "./";

// jest.mock("../../providers", () => ({
//   useAppContext: jest.fn().mockReturnValue({ featured: [] }),
// }));

test("renders featured title", () => {
  const { getByText } = render(<Featured />);
  expect(getByText(/Featured/i)).toBeInTheDocument();
});
