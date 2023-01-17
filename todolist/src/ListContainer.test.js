import React from "react";

import { useSelector } from "react-redux";

import { render, screen } from "@testing-library/react";

import ListContainer from "./ListContainer";

import tasks from "../fixtures/tasks";

jest.mock("react-redux");

describe("ListContainer", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks,
    })
  );
  it("renders tasks", () => {
    const { container } = render(<ListContainer />);

    expect(container).toHaveTextContent("아무일도 하기싫다");
  });
});
