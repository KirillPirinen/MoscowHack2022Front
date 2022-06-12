import React from 'react'
import styled from "@emotion/styled"
import { tablet } from '../../../../components/styles/media'
import { disabled, animals, children, incident, nature } from '../../../../images/'
import { Typography } from "@material-ui/core"
import { defaultFont } from "../../../../components/styles/defaultStyles"

export const Container = styled.div`
  width:100%;
  max-width: 800px;
  display: grid;
  min-height: 400px;
  grid-template-columns: 0.5fr 0.6fr 1.2fr 0.65fr;
  grid-template-rows: 1fr 0.2fr 1fr 1fr;
  gap: 12px 12px;
  grid-template-areas: 
    "nature animals disabled children"
    "incident incident disabled children"
    "incident incident disabled rest";

  @media ${tablet} {
    min-height: 500px;
    grid-template-columns: 0.3fr 0.4fr 0.6fr;
    grid-template-rows: 1fr 0.1fr 1fr 2fr;
    gap: 12px 12px;
    max-width:600px;
    
    grid-template-areas: 
    "nature animals children"
    "incident incident children"
    "incident incident rest"
    "disabled disabled disabled";
  }
`
export const TypographyStyled = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  width:90%;
  margin:0 auto;
  position:absolute;
  padding:0 5%;
  top:30px;
  text-align:center;
  ${defaultFont(18)}
  font-weight:600;
  line-height: 24px;
`

export const BaseBox = styled.div`
  position: relative;
  border-radius: 14px;
  background-repeat: no-repeat;
  transition: all 0.1s ease-out;
  &:hover {
    transform:scale(1.03);
    cursor:pointer;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
  }
`

export const NatureBox = styled(BaseBox)`
  background-color: #5BC1EE;
  grid-area: nature;
  background-image:url(${nature});
  background-position: right 12px top;
`
export const AnimalsBox = styled(BaseBox)`
  background-color: #F97564;
  grid-area: animals;
  background-image:url(${animals});
  background-position: right bottom;
`
export const IncidentBox = styled(BaseBox)`
  background-color: #99D1D9;
  grid-area: incident;
  background-image:url(${incident});
  background-position: right 26px bottom;
  @media ${tablet} {
    background-position: right bottom;
    & ${TypographyStyled} {
      text-align:left;
      top:15px;
      max-width:70%;
      padding-left:15px;
    }
  }
`
export const DisabledBox = styled(BaseBox)`
  background-color: #DCDFFF;
  grid-area: disabled;
  background-image:url(${disabled});
  background-position: bottom center;
  @media ${tablet} {
    background-position:right;
    & ${TypographyStyled} {
      text-align:left;
      top:15px;
      max-width:330px;
      padding-left:15px;
    }
  }
`
export const ChildrenBox = styled(BaseBox)`
  background-color: #3A8EEF;
  grid-area: children;
  background-image:url(${children});
  background-position: left bottom;
`
export const RestBox = styled(BaseBox)`
  ${TypographyStyled} {
    top:auto;
    bottom: 20px;
  }
  background: #3ABD98;
  grid-area: rest;
  position: relative
`

const Arrow = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.63992 0.0349736C5.46422 0.188902 4.36663 0.61798 3.38855 1.30598C2.84489 1.68846 1.8574 2.66804 1.39382 3.28472C0.746775 4.14563 0.316274 5.11559 0.0918395 6.21832C0.00620744 6.63921 0 7.09779 0 13.0029C0 18.908 0.00620744 19.3666 0.0918395 19.7875C0.416102 21.3808 1.11205 22.5953 2.43164 23.8705C3.37461 24.7818 4.22681 25.3144 5.30329 25.6651C6.3843 26.0174 5.98178 25.9999 13 25.9999C18.9065 25.9999 19.3652 25.9937 19.7862 25.908C21.2898 25.6022 22.4114 24.9976 23.5767 23.8649C24.8937 22.5847 25.5849 21.3758 25.9082 19.7875C25.9938 19.3666 26 18.908 26 13.0029C26 7.09779 25.9938 6.63921 25.9082 6.21832C25.5849 4.63 24.8937 3.4211 23.5767 2.14089C22.4405 1.03643 21.3969 0.461254 19.9084 0.118907C19.4415 0.0115231 19.3687 0.0102513 13.2035 0.000993228C9.77544 -0.00414452 6.82182 0.011167 6.63992 0.0349736ZM19.3153 2.08992C20.0971 2.22681 20.8763 2.55349 21.4773 2.99635C21.8928 3.30253 22.6349 4.04267 22.9672 4.48238C23.3235 4.95373 23.7056 5.74728 23.8489 6.31365L23.9648 6.77147V13.0029V19.2343L23.849 19.6891C23.7089 20.2389 23.3656 20.9805 23.0385 21.4396C22.7492 21.8455 21.9047 22.6945 21.4756 23.0107C20.8764 23.4522 20.0963 23.7791 19.3153 23.9159C18.68 24.0271 7.32004 24.0271 6.68475 23.9159C5.89732 23.778 5.11009 23.4468 4.52548 23.0075C4.09441 22.6835 3.35313 21.9464 3.0331 21.5234C2.67673 21.0525 2.29451 20.259 2.15108 19.6921L2.03522 19.2343V13.0029V6.77147L2.15103 6.3167C2.29095 5.76732 2.63419 5.02576 2.96125 4.56621C3.24542 4.16699 4.09584 3.31331 4.52838 2.99314C5.10343 2.56747 5.90744 2.2265 6.65692 2.09058C7.22958 1.98671 18.7223 1.9861 19.3153 2.08992ZM13.6912 8.02783C13.4037 8.10703 13.0832 8.44592 13.006 8.7525C12.8717 9.28571 12.9511 9.40769 14.3402 10.8028L15.5178 11.9855L11.6513 11.9866C8.02133 11.9877 7.77227 11.9934 7.58076 12.0804C6.9105 12.3848 6.75878 13.2262 7.28412 13.7251C7.60614 14.0309 7.44877 14.0203 11.6623 14.0203H15.5178L14.3402 15.203C13.6925 15.8535 13.1288 16.4543 13.0874 16.5383C12.8802 16.9589 12.9489 17.3801 13.2785 17.7096C13.6177 18.0487 14.0368 18.1098 14.4755 17.884C14.5735 17.8335 15.6074 16.8349 16.7732 15.6646C18.9876 13.4417 19.0034 13.423 19.0034 13.0029C19.0034 12.5828 18.9876 12.5641 16.7732 10.3411C15.6074 9.1709 14.5699 8.17006 14.4675 8.11695C14.2264 7.99197 13.9407 7.95916 13.6912 8.02783Z" fill="black"/>
  </svg>
)

export const ArrowIcon = styled(Arrow)`
  position: absolute;
  top:14px;
  right:14px;
`
