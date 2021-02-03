// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

global.createComponent = (Component, Props) => {
  const ref = React.createRef();
  render(<Component {...Props} ref={ref} />);
  return ref.current;
};

global.resolveFunction = (func) => {
  return new Promise((resolve, reject) => {
    if (
      (typeof func === "function" && func()) ||
      (typeof func !== "function" && func)
    )
      resolve();
    else reject();
  });
};
