
import StockListCard from './StockListCard'


const StockList = ({ companies, sector }) => {
    return (
        <div style={{ height: '75vh', overflow: 'scroll', display: 'flex', flexDirection: 'column', }} >
            <h3 style={{ margin: 'auto', fontFamily: 'Ibm Plex Sans', color: '#FFFFFF' }}> {sector}</h3>
            {companies.map(e => (
                <StockListCard key={e.name} company={e} />
            ))
            }
        </div>
    )
}


export default StockList
