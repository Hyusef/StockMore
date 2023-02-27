import { render, fireEvent, screen, getByRole } from "@testing-library/react";
import StockSearchForm from '../StockSearchForm.jsx'
import '@testing-library/jest-dom'


describe("Button Related Tests", () => {
    test("Renders Button To Search Stocks", () => {
        render(<StockSearchForm />);
        const searchButton = screen.getByRole('button', { name: /Search Stock/i })
        expect(searchButton).toBeInTheDocument();
    });

    test("Button is not disabled", () => {
        render(<StockSearchForm />);
        const searchButton = screen.getByRole('button', { name: /Search Stock/i })
        expect(searchButton).not.toBeDisabled();
    });

    test('Button onClick works should call console log', () => {
        const logSpy = jest.spyOn(global.console, 'log');
        render(<StockSearchForm />);
        const SearchButton = screen.getByRole('button', { name: /Search Stock/i })
        fireEvent.click(SearchButton)
        expect(logSpy).toHaveBeenCalledWith('test');
    })
});

describe("Input Related Tests", () => {
    test("Form Renders Input Element", () => {
        render(<StockSearchForm />);
        const inputEle = screen.getByLabelText(/Stock Symbol or Stock Name/)
        expect(inputEle).toBeInTheDocument()
    });
});




