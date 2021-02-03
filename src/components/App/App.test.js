import { render, screen } from "@testing-library/react";
import App from ".";

test("renders Desislav", () => {
  render(<App name={"Desislav"} />);
  return expect(screen.getByText(/Desislav/i)).toBeInTheDocument();
});

test("renders Nedyalko", () => {
  render(<App name={"Nedyalko"} />);
  return expect(screen.getByText(/Nedyalko/i)).toBeInTheDocument();
});

test("_testMethod()", () => {
  return resolveFunction(createComponent(App, {})._testMethod() === 1);
});

test("_testTool()", () => {
  return resolveFunction(() => {
    return createComponent(App, {})._testTool() === 1;
  });
});
