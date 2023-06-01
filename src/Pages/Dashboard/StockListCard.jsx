
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
display:flex;
flex-direction:column;
align-items:center;
`
const Text = styled.div`
    border-radius:5px;
    padding:3px;
    font-family:'Roboto';
    font-weight:bold;
    color:hsl(210, 105%, 32%);
    font-size:1rem;

`
const AddButton = styled.button`
margin:0 !important;
background-color:hsl(210, 50%, 22%);
align-self:start;
padding:0.35em 1.2em;
border:0.1em solid hsl(210, 50%, 22%);
border-radius:0.2em;
box-sizing:border-box;
margin-bottom:3px;
text-decoration:none;
font-family:'Roboto';
font-weight:bold;
color:hsl(210, 90%, 0%);
text-align:center;
transition: all 0.2s;
cursor:pointer;
&:hover{  
    color:hsl(210, 105%, 120%);
    background-color:hsl(210, 50%, 15%);
    border:0.1em solid hsl(210, 50%, 22%) ;

    }

    &:disabled {
      opacity:9%;
      cursor:not-allowed
    }

`
const Maindiv = styled.div`
border-radius:10px;
padding:5px;
display:flex;
flex-direction:row;
background:rgba(0, 0, 0, 0.5);
margin:5px;
width:13vw;
flex-wrap:wrap;
border:1px solid hsl(210, 105%, 12%);
@media only screen and (max-width: 900px) {
  width:20vw;
  }
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
          <Text>
            <p>{company.name}</p>
            <p>{company.country}</p>
            <p>{company.symbol}</p>
          </Text>
        <AddButton onClick={incChosen}><span>Add</span></AddButton>
        </TextContainer>
      </Maindiv>
    </>
  )
}

export default StockListCard;