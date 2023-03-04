
import StockList from './StockList';
import styled from 'styled-components';

const StockListContainer = styled.div`
border:1px solid white;
width:100vw;
background:#08081b
`

const TechCompanies =
    [
        {
            'name': 'Apple',
            'sector': 'Technology',
            'country': 'US',
            'symbol': 'AAPL'
        },
        {
            'name': 'Microsoft',
            'sector': 'Technology',
            'country': 'US',
            'symbol': 'MSFT'
        },
        {
            'name': 'Amazon',
            'sector': 'Technology',
            'country': 'US',
            'symbol': 'AMZN'
        },
        {
            'name': 'Ibm',
            'sector': 'Technology',
            'country': 'US',
            'symbol': 'IBM'
        },
        {
            'name': 'Meta',
            'sector': 'Technology',
            'country': 'US',
            'symbol': 'META'
        }
    ];

const AutomotiveCompanies =
    [
        {
            'name': 'Toyota',
            'sector': 'Automotive',
            'country': 'US',
            'symbol': 'TYT.L'
        },
        {
            'name': 'Mercedes',
            'sector': 'Automotive',
            'country': 'US',
            'symbol': 'MBG.DE'
        },
        {
            'name': 'Volkswagen',
            'sector': 'Automotive',
            'country': 'US',
            'symbol': 'VOW3.DE'

        },
        {
            'name': 'Ford',
            'sector': 'Automotive',
            'country': 'US',
            'symbol': 'F'
        },
        {
            'name': 'Bmw',
            'sector': 'Automotive',
            'country': 'US',
            'symbol': 'BMW.DE'
        }
    ];

const FinanceCompanies =
    [
        {
            'name': 'Paypal',
            'sector': 'Finance',
            'country': 'U.S',
            'symbol': 'PYPL'
        },
        {
            'name': 'Deutschebank',
            'sector': 'Finance',
            'country': 'Germany',
            'symbol': 'DBK.DE'
        },
        {
            'name': 'Chase',
            'sector': 'Finance',
            'country': 'US',
            'symbol': 'JPM'
        },
        {
            'name': 'Visa',
            'sector': 'Finance',
            'country': 'U.S',
            'symbol': 'V'
        },
        {
            'name': 'Barclays',
            'sector': 'Finance',
            'country': 'US',
            'symbol': 'BCS'
        }
    ];



const ListsContainer = () => {
    return (
        <>
            <StockListContainer style={{ display: 'flex', justifyContent: 'space-evenly', width: '85%', borderRadius: '5px' }}>
                <StockList companies={TechCompanies} sector={'Technology'} />
                <StockList companies={AutomotiveCompanies} sector={'Automotive'} />
                <StockList companies={FinanceCompanies} sector={'Finance'} />
            </StockListContainer>
        </>
    )
}

export default ListsContainer;
