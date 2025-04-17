import { render,screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import mockdata from "../mockData/resCardMock.json";
import '@testing-library/jest-dom'

test("should render Resturant card component with props data", () => {
  render(<ResturantCard resData={mockdata} />);

  const name = screen.getByText("Big Bowl")
  expect(name).toBeInTheDocument();
});
