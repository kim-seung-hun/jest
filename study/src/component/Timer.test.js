import { screen, render } from "@testing-library/react";
import Timer from "./Timer";

test("초 표시", () => {
  // 매초 변하는 컴포넌트의 경우 스냅샷
  // mock함수로 숫자를 고정시켜놓는다.
  Date.now = jest.fn(() => 123214);
  const el = render(<Timer />);
  expect(el).toMatchSnapshot();
});
