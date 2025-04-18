// it test that contact page is loaded or not

import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

import "@testing-library/jest-dom";

//first you have to render this in the jsdom Component

describe("This is contact page testing", () => {
  // beforeEach(()=>{
  //   console.log(" har testing ki suruaat")
  // })
  // beforeAll(()=>{
  //   console.log("Tesing ki shuruat")
  // })

  // afterAll(()=>{
  //   console.log("After each test case")
  // })

  // afterEach(()=>{
  //   console.log("Har bar ka yahi hai")
  // })

  test("Should load the contact page component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load the btn on the contact component", () => {
    render(<Contact />);

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
  });

  test("Should load the btn on the contact component using text", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load the btn on the Input component using text", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });

  // error aya hai add babel@/preset react

  test("Should load 2 input boxes in the Contact Component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    //expect(inputBoxes).toHaveLength(2); passed
    expect(inputBoxes.length).toBe(2); // passed
  });
});
