import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";
describe("Testing Input Component", () => {
  it("renders the component", () => {
    const { container } = render(<Input type="password" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("triggers events", () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    render(<Input onChange={onChange} onFocus={onFocus} onBlur={onBlur} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: { value: "Testing Jest" },
    });
    fireEvent.focus(input);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledTimes(1);
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
