import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { render, screen } from "@testing-library/react";
import App from "./App";

import tasks from "../fixtures/tasks";

jest.mock("react-redux");

describe("App", () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      tasks,
    })
  );
  it("renders tasks", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent("아무일도 하기싫다");
  });
});
