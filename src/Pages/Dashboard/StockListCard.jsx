
import styled from "styled-components";
import { useContext } from "react";
import { ListsContext } from './index.js'
import { AppleLogo, AmazonLogo, IbmLogo, MicrosoftLogo, MercedesLogo, BmwLogo, FordLogo, VolkswagenLogo, ToyotaLogo, ChaseLogo, BarclaysLogo, DeutschebankLogo, MetaLogo, PaypalLogo, VisaLogo } from './Logos'

//Down For StockListCard
const LogoContainer = styled.div`
    border-radius:5px;
    display:flex;
    height:60px;
    justify-content:center;
    align-items:center;
    margin:5px;
`
const TextContainer = styled.div`
    border-radius:5px;
    padding:3px;
    margin:5px;
    font-family: 'IBM Plex Sans';
    font-weight:bold;
    color:#edf4ff;
`
const AddButton = styled.button`
display:inline-block;
padding:0.35em 1.2em;
border:0.1em solid white;
border-radius:0.12em;
box-sizing: border-box;
text-decoration:none;
font-family:'IBM Plex Sans';
font-weight:bold;
color:black;
text-align:center;
transition: all 0.2s;
cursor:pointer;
&:hover{
    color:#adceff;
    background-color:#000d21;
    }
`
const Maindiv = styled.div`
border-radius:10px;
border:1px solid gray;
padding:5px;
display:flex;
flex-direction:row;
background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
margin:5px;
`
//UP For StockListCard
const StockListCard = ({ company, }) => {
  let { setChosen, handleArray, setInitialAdded } = useContext(ListsContext);
  const incChosen = (e) => {
    setChosen(chosen => chosen + 1);
    e.currentTarget.disabled = true
    setInitialAdded((currentAdded) => ([...currentAdded, company.symbol]));
  }
  return (
    <>
      <Maindiv>
        <LogoContainer>
          {{
            'Apple': <AppleLogo />,
            'Microsoft': <MicrosoftLogo />,
            'Meta': <MetaLogo />,
            'Amazon': <AmazonLogo />,
            'Ibm': <IbmLogo />,
            'Mercedes': <MercedesLogo />,
            'Bmw': <BmwLogo />,
            'Volkswagen': <VolkswagenLogo />,
            'Ford': <FordLogo />,
            'Toyota': <ToyotaLogo />,
            'Paypal': <PaypalLogo />,
            'Visa': <VisaLogo />,
            'Chase': <ChaseLogo />,
            'Barclays': <BarclaysLogo />,
            'Deutschebank': <DeutschebankLogo />,
          }[company.name]}
        </LogoContainer>
        <TextContainer>
          <p>Company: {company.name}</p>
          <p>Sector: {company.sector}</p>
          <p>Country: {company.country}</p>
          <p>Symbol: {company.symbol}</p>
          <AddButton onClick={incChosen}>Add Stock</AddButton>
        </TextContainer>
      </Maindiv>
    </>
  )
}

export default StockListCard;