
import StockList from './StockList';
import styled from 'styled-components';

const StockListContainer = styled.div`
width:100vw;
background:rgba(0, 0, 0, 0.2);
border:0.1px solid hsl(210, 105%, 35%);
margin-bottom:130px;
`

const TechCompanies =
    [
        {
            'name': 'Apple',
            'sector': 'Technology',
            'country': 'U.S',
            'symbol': 'AAPL'
        },
        {
            'name': 'Microsoft',
            'sector': 'Technology',
            'country': 'U.S',
            'symbol': 'MSFT'
        },
        {
            'name': 'Amazon',
            'sector': 'Technology',
            'country': 'U.S',
            'symbol': 'AMZN'
        },
        {
            'name': 'Ibm',
            'sector': 'Technology',
            'country': 'U.S',
            'symbol': 'IBM'
        },
        {
            'name': 'Meta',
            'sector': 'Technology',
            'country': 'U.S',
            'symbol': 'META'
        }
    ];

const AutomotiveCompanies =
    [
        {
            'name': 'Toyota',
            'sector': 'Automotive',
            'country': 'U.S',
            'symbol': 'TYT.L'
        },
        {
            'name': 'Mercedes',
            'sector': 'Automotive',
            'country': 'U.S',
            'symbol': 'MBG.DE'
        },
        {
            'name': 'Volkswagen',
            'sector': 'Automotive',
            'country': 'U.S',
            'symbol': 'VOW3.DE'

        },
        {
            'name': 'Ford',
            'sector': 'Automotive',
            'country': 'U.S',
            'symbol': 'F'
        },
        {
            'name': 'Bmw',
            'sector': 'Automotive',
            'country': 'U.S',
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
