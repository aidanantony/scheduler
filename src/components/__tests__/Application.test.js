import React from "react";


import { render, cleanup, fireEvent, waitForElement, prettyDOM, getAllByTestId, getByText, getByPlaceholderText, getByAltText } from "@testing-library/react";
import Application from "components/Application";

afterEach(cleanup);

it("defaults to Monday and changes the schedule when a new day is selected", () => {
  const { getByText } = render(<Application />);

  return waitForElement(() => getByText("Monday")).then(() => {
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
});


// it.only("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
//   const { container } = render(<Application />);

//   await waitForElement(() => getByText(container, "Archie Cohen"));

//   const appointments = getAllByTestId(container, "appointment");
//   const appointment = appointments[0];

//   fireEvent.click(getByAltText(appointment, "Add"));

//   fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
//     target: { value: "Lydia Miller-Jones" }
//   });
//   fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

//   fireEvent.click(getByText(appointment, "Save"));

//   console.log(prettyDOM(appointment));
// });

it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
  const { container } = render(<Application />);

  await waitForElement(() => getByText(container, "Archie Cohen"));

  console.log(prettyDOM(container));
});