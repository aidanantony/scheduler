/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render, getByText } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Application from "components/Application";
import Appointment from "components/Appointment/index";

/*
  A test that renders a React Component
*/

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("does something it is supposed to do", () => {
    // ...
  });

  it("does something else it is supposed to do", () => {
    // ...
  });
});