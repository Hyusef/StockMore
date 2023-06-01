
import StockListCard from './StockListCard'


const StockList = ({ companies, sector }) => {
    return (
        <div style={{ height: '75vh', overflow: 'scroll', display: 'flex', flexDirection: 'column', }} >
            <h3 style={{ margin: 'auto', fontFamily: 'Roboto', color: '#f7f1e3' }}> {sector}</h3>
            {companies.map(e => (
                <StockListCard key={e.name} company={e} />
            ))
            }
        </div>
    )
}


export default StockList
