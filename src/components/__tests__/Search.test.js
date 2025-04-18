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

  const cardBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "smoor" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(1);
});

test("Should filter top rated resturant", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeFilter = screen.getAllByTestId('resCard')
  //expect(cardBeforeFilter.length).toBe(9)

  const topRatedButton = screen.getByRole("button",{name:"Top-Rated Resturant"})
  //expect(topRatedButton).toBeInTheDocument()

  fireEvent.click(topRatedButton)

  const cardsAfterFilter = screen.getAllByTestId('resCard')
  expect(cardsAfterFilter.length).toBe(2);



});
