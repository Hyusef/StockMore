
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
        },
        {
            'name': 'Microsoft',
            'sector': 'Technology',
            'country': 'US',
        },
        {
            'name': 'Amazon',
            'sector': 'Technology',
            'country': 'US',
        },
        {
            'name': 'Ibm',
            'sector': 'Technology',
            'country': 'US',
        },
        {
            'name': 'Meta',
            'sector': 'Technology',
            'country': 'US',
        }
    ];

const AutomotiveCompanies =
    [
        {
            'name': 'Toyota',
            'sector': 'Automotive',
            'country': 'US',
        },
        {
            'name': 'Mercedes',
            'sector': 'Automotive',
            'country': 'US',
        },
        {
            'name': 'Volkswagen',
            'sector': 'Automotive',
            'country': 'US',
        },
        {
            'name': 'Ford',
            'sector': 'Automotive',
            'country': 'US',
        },
        {
            'name': 'Bmw',
            'sector': 'Automotive',
            'country': 'US',
        }
    ];

const FinanceCompanies =
    [
        {
            'name': 'Monzo',
            'sector': 'Finance',
            'country': 'U.K',
        },
        {
            'name': 'Deutschebank',
            'sector': 'Finance',
            'country': 'Germany',
        },
        {
            'name': 'Starlingbank',
            'sector': 'Finance',
            'country': 'U.K',
        },
        {
            'name': 'Chase',
            'sector': 'Finance',
            'country': 'US',
        },
        {
            'name': 'Barclays',
            'sector': 'Finance',
            'country': 'US',
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
