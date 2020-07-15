import React from "react";
import { render } from "@testing-library/react";
import Collection from "./Collection";
import { generateLoadingItems } from "../../utils";

describe("Testing Collection Component", () => {
  const asyncFunc = jest.fn(() =>
    Promise.resolve({ data: [...generateLoadingItems()] })
  );
  it("displays loading skeleton", () => {
    const { container } = render(
      <Collection fetchMethod={asyncFunc} args={[1, 2]} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
