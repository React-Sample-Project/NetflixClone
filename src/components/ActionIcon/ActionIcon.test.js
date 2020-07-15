import React from "react";
import { render } from "@testing-library/react";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faCheckCircle } from "@fortawesome/free-regular-svg-icons";

import ActionIcon from "./ActionIcon";

describe("<ActionIcon> Component", () => {
  it("Renders the component", () => {
    const { container } = render(<ActionIcon icon={faAdjust} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("Renders loading icon", () => {
    const { container } = render(<ActionIcon isLoading={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("Renders renders true icon", () => {
    const { container } = render(
      <ActionIcon
        isLoading={false}
        value={true}
        trueIcon={faThumbsUp}
        falseIcon={faCheckCircle}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("Renders renders false icon", () => {
    const { container } = render(
      <ActionIcon
        isLoading={false}
        value={false}
        trueIcon={faThumbsUp}
        falseIcon={faCheckCircle}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
