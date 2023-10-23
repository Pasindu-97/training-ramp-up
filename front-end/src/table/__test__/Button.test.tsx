import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CustomizeButton from "../Button";

describe("Button Component", () => {
  test("renders", () => {
    const TestComponent = () => {
      const [visible, setVisible] = useState(false);

      return (
        <div>
          <CustomizeButton
            label="Add New"
            backgroundColor="white"
            color="red"
            onClick={() => setVisible(!visible)}
          />
          {visible && <p>Content is Visible</p>}
        </div>
      );
    };

    render(<TestComponent />);
    const addButton = screen.getByText("Add New");

    expect(addButton).toBeInTheDocument();

    fireEvent.click(addButton);

    const visibleContent = screen.getByText("Content is Visible");
    expect(visibleContent).toBeInTheDocument();
  });
});