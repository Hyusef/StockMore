
import styled from "styled-components";
import { useContext } from "react";
import { Apple } from '@styled-icons/boxicons-logos/Apple'
import { Amazon } from '@styled-icons/boxicons-logos/Amazon'
import { Ibm } from '@styled-icons/simple-icons/Ibm'
import { Meta } from '@styled-icons/boxicons-logos/Meta'
import { Microsoft } from '@styled-icons/boxicons-logos/Microsoft'
import { Volkswagen } from '@styled-icons/simple-icons/Volkswagen'
import { Toyota } from '@styled-icons/simple-icons/Toyota'
import { Mercedes } from '@styled-icons/simple-icons/Mercedes';
import { Ford } from '@styled-icons/simple-icons/Ford'
import { Bmw } from '@styled-icons/simple-icons/Bmw';
import { Chase } from '@styled-icons/simple-icons/Chase'
import { Barclays } from '@styled-icons/simple-icons/Barclays'
import { Starlingbank } from '@styled-icons/simple-icons/Starlingbank'
import { Monzo } from '@styled-icons/simple-icons/Monzo';
import { Deutschebank } from '@styled-icons/simple-icons/Deutschebank';
import { ListsContext } from './index.js'

//Down For StockListCard
const AppleLogo = styled(Apple)`
  width:50px;
  color:#000000;
`
const AmazonLogo = styled(Amazon)`
  width:50px;
  color:#FF9900;
`
const IbmLogo = styled(Ibm)`
  width:50px;
  color:#006699;
`
const MetaLogo = styled(Meta)`
  width:50px;
  color:#4267B2;
`
const MicrosoftLogo = styled(Microsoft)`
  width:50px;
  color: #008ad7;
`
const MercedesLogo = styled(Mercedes)`
  width:50px;
  color:white;
`
const BmwLogo = styled(Bmw)`
  width:50px;
  color: #133a7c;
`
const FordLogo = styled(Ford)`
  width:50px;
  color:#2a6bac;
`
const VolkswagenLogo = styled(Volkswagen)`
  width:50px;
  color:#2a6bac;
`
const ToyotaLogo = styled(Toyota)`
  width:50px;
 background-image: linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%);
 background-blend-mode: lighten;
`
const MonzoLogo = styled(Monzo)`
  width:50px;
  color:#e83860;
`
const StarlingbankLogo = styled(Starlingbank)`
  width:50px;
  color:#6935D3 ;
`
const ChaseLogo = styled(Chase)`
  width:50px;
  color:#117ACA ;
`
const BarclaysLogo = styled(Barclays)`
  width:50px;
  color:white,
`
const DeutschebankLogo = styled(Deutschebank)`
  width:50px;
  color:#0018a8  ;
`
const LogoContainer = styled.div`
    border-radius:5px;
    display:flex;
    height:60px;
    justify-content:centr;
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
  let { setChosen} = useContext(ListsContext);
  const incChosen = (e) => {
    setChosen(chosen => chosen + 1);
    e.currentTarget.disabled = true
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
            'Monzo': <MonzoLogo />,
            'Starlingbank': <StarlingbankLogo />,
            'Chase': <ChaseLogo />,
            'Barclays': <BarclaysLogo />,
            'Deutschebank': <DeutschebankLogo />,
          }[company.name]}
        </LogoContainer>
        <TextContainer>
          <p>Company: {company.name}</p>
          <p>Sector: {company.sector}</p>
          <p>Country: {company.country}</p>
          <AddButton onClick={incChosen}>Add Stock</AddButton>
        </TextContainer>
      </Maindiv>
    </>
  )
}

export default StockListCard;