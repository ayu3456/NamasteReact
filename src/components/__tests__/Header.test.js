import { Provider } from "react-redux";
import Header from "../Header.js";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import appStore from "../../../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";

// yaha par redux use hua hai. to hame redux store provide karna padega. redux ek external library hai.

//Link tag ka use hua tha , Link react router dom se aata hai router provide karna hoga.

test("Should load a header component with login btn", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button");
  expect(loginBtn).toBeInTheDocument();
});

test("Should render header component with grocery Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const grocery = screen.getByText("Grocery");
  expect(grocery).toBeInTheDocument();
});

test("Should render header component with cart Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart(0-items)");
  expect(cartItems).toBeInTheDocument();
});

// it will match the exaxt string. if you only want to check 'cart' is present or not. u can use regex.

test("Should render header component with cart keyword", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartKeyword = screen.getByText(/Cart/);
  expect(cartKeyword).toBeInTheDocument();
});

// lets check the behavior that onclick on login btn it changes to logout button.
test("Should change Login Btn to logout btn onClick on login btn", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  // fireEvent

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });

  expect(logoutBtn).toBeInTheDocument();
});


