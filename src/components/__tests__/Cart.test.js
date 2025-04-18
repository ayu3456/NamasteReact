// mock the fetch once again

import { fireEvent, render, screen } from "@testing-library/react";
import ResturantMenu from "../ResturantMenu";
import { act } from "react";
import appStore from "../../../utils/appStore";
import "@testing-library/jest-dom";


import Header from "../Header";
import Cart from '../Cart'

import MOCK_DATA from "../mockData/mockResMenu.json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// global.fetch = jest.fn(()=>{
//     return Promise.resolve({
//         json: () =>  Promise.resolve(MOCK_DATA)
//     })
// })

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should should load resturant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResturantMenu />
          <Cart/>


        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Recommended (20)");

  fireEvent.click(accordionHeader);
  const items = screen.getAllByTestId("foodItems");
  expect(items.length).toBe(20);

  // click on the add btn

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  //console.log(addBtns)

  fireEvent.click(addBtns[0]);

  const ans1 = screen.getByText("Cart(1-items)");
  expect(ans1).toBeInTheDocument();

  fireEvent.click(addBtns[1]);


  const ans2 = screen.getByText("Cart(2-items)");
  expect(ans2).toBeInTheDocument();
  // my cart page also have two component 

  expect(screen.getAllByTestId("foodItems").length).toBe(22)

  fireEvent.click(screen.getByRole('button',{name:"Clear Cart"}));

  expect(screen.getAllByTestId("foodItems").length).toBe(20)




});
