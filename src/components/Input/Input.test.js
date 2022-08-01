import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Input } from "./Input.component";

it("Component renders as it should ", () => {
	const { queryByTestId, queryByPlaceholderText } = render(<Input />);

	expect(queryByTestId("input-component")).toBeTruthy();
	expect(queryByPlaceholderText("ENTER COUNTRY TO VISIT")).toBeTruthy();
	expect(queryByTestId("modal-component")).toBeFalsy();
	expect(queryByTestId("div-add-element")).toBeFalsy();
});

describe("Input value renders correctly", () => {
	it("input updated on change", () => {
		const { queryByPlaceholderText } = render(<Input />);
		const inputElement = queryByPlaceholderText("ENTER COUNTRY TO VISIT");

		fireEvent.click(inputElement);
		fireEvent.change(inputElement, {
			target: { value: "Poland" }
		});
		expect(inputElement.value).toBe("Poland");
	});
});
