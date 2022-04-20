import {
  getByAltText,
  getByText,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import "@testing-library/jest-dom";
import App from "../App";

describe("App component", () => {
  test("it renders", () => {
    render(<App />);
    expect(screen.getByText("WD BLOG")).toBeInTheDocument();
  });
  test("Clicking on about goes to about page", () => {
    const history = createMemoryHistory();

    render(<App />);

    fireEvent.click(screen.getByText("About"));
    expect(
      screen.getByText('This is my absolutely fantastic "About Me" Page!')
    ).toBeInTheDocument();
  });
});
