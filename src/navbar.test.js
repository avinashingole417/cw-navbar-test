import React from "react";
import Navbar from "./components/navbar";

it("should render the navbar", () => {
  const navbar = <Navbar />;
  expect(navbar).toBeTruthy();
});