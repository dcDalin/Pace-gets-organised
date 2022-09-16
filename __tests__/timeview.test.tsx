import { render, screen } from "@testing-library/react";
import TimeView from "@/components/TimeView";
import "@testing-library/jest-dom";

describe("TimeView", () => {
  it("renders time view unchanged", () => {
    const { container } = render(<TimeView />);
    expect(container).toMatchSnapshot();
  });

  it("renders time view", async () => {
    render(<TimeView />);
    const timeview = await screen.findByTestId("timeview");
    expect(timeview).toBeInTheDocument();
  });
});
