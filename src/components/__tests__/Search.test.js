// writing test cases to fetch the data.
// jsdom is browser like , it is not browser . fetch is function of the browser , therefore ,it is not defined here. we have to create a mock fetch function

// fetch -> return a promise
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import Mock_Data from "../../components/mockData/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

test("Should render the body component with Search Button", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(4);
});
