import React from "react";

import { render, screen } from "@testing-library/react";

import List from "./List";

import tasks from "../fixtures/tasks";

describe("List", () => {
  context("with tasks", () => {
    it("renders tasks", () => {
      const { container } = render(<List tasks={tasks} />);

      expect(container).toHaveTextContent("아무일도 하기싫다");
      expect(container).toHaveTextContent("건물 매입");
    });
  });
  context("without tasks", () => {
    it("renders no task message", () => {
      const { container } = render(<List tasks={tasks} />);

      expect(container).toHaveTextContent("아무일도 하기싫다");
      expect(container).toHaveTextContent("건물 매입");
    });
  });
});
