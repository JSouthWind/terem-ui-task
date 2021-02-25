import React from "react";
import { render } from "@testing-library/react";
import { Featured } from ".";

test("renders featured title", () => {
  const { getByText } = render(<Featured />);
  expect(getByText(/Featured/i)).toBeInTheDocument();
});
