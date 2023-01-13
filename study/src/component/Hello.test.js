import { screen, render } from "@testing-library/react";
import Hello from "./Hello";

const user = {
  name: "Tom",
  age: 30,
};

// jest 스냅샷
// 성공하는 case를 찍어두고 비교하면서 test하는 방식
const user2 = {
  age: 30,
};

test("snapshot : name 있음", () => {
  const el = render(<Hello user={user} />);
  expect(el).toMatchSnapshot();
});

test("snapshot : name 없음", () => {
  const el = render(<Hello />);
  expect(el).toMatchSnapshot();
});

test("Hello라는 단어가 포함되나?", () => {
  render(<Hello user={user} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});
