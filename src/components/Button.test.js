import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

import React, { useEffect } from "react";
import "../styles/button.css";

describe("Button", () => {
  test("検索ボタンがあるか？", () => {
    render(<Button />);
    const buttonElement = screen.getByText("検索");
    expect(buttonElement).toBeInTheDocument();
  });
});
