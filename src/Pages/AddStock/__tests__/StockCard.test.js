import { render, fireEvent, screen, getByRole } from "@testing-library/react";
import StockCard from '../StockCard.jsx'
import '@testing-library/jest-dom'

//test block
test("Stockcard renders the right data when company  props is passed to it.", () => {
    const companyObject = {
        'exchange': "NMS",
        'shortname': "Microsoft Corporation",
        'quoteType': "EQUITY",
        'symbol': "MSFT",
        'index': "quotes",
        'score': 151132,
        'longname': "Microsoft Corporation",
        'exchDisp': "NASDAQ",

    }
    render(<StockCard company={companyObject} />);
    const companyName = screen.getByRole('heading', { name: 'Microsoft Corporation' });
    const xChangeName = screen.getByRole('heading', { name: 'NMS' });
    const symbol = screen.getByRole('heading', { name: 'MSFT' });
    expect(companyName).toBeInTheDocument();
    expect(xChangeName).toBeInTheDocument();
    expect(symbol).toBeInTheDocument();
});