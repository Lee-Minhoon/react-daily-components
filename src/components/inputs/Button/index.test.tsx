import { render, screen } from "@testing-library/react";
import Button from ".";
import userEvent from "@testing-library/user-event";
import { useCallback } from "react";

describe("<Button />", () => {
  it("matches snapshot", () => {
    const utils = render(<Button>Button</Button>);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(<Button>Button</Button>);
    utils.getByText("Button");
  });
  it("click test", () => {
    const handleClick = () => {
      console.log("Hello, world!");
    };
    const utils = render(<Button onClick={handleClick}>Button</Button>);
    const target = screen.getByRole("button", { name: "Button" });
    userEvent.click(target);
    expect(console).toEqual("Hello, world!");
  });
});
