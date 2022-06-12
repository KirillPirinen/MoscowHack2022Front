import styled from '@emotion/styled';
import { Typography, Chip } from '@material-ui/core';
import {Stack} from '@mui/material'
import { CloseButton } from '../Buttons/CloseButton';
import { MainLink } from '../Links/MainLink';
import InputUnstyled from "@mui/base/InputUnstyled";


// margin: '0px', marginTop: '5px', marginRight: '8px'

export const TagInputStyled = styled(InputUnstyled)`
  margin: 0px;
  margin-right: 8px !important;
  margin-left: 0px !important;
`

export const StackStyled = styled(Stack)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  ;
`

export const ChipStyled = styled(Chip)`
  border-radius: 4px;
  margin-left: 0px !important;
  margin-right: 8px !important;
  margin-top: 4px !important;
`
export const TagCreatorChipStyled = styled(Chip)`
  border-radius: 4px;
  border: 1px dashed #3ABD98;
  margin-left: 0px !important;
  margin-right: 8px !important;
  margin-top: 4px !important;
`

export const SectionStyled = styled.section`
  width: 774px;
  height: 92px;
  border-radius: 6px;
  border: 1px dashed #3ABD98;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const FormStyled = styled.form`
  width: 834px;
  max-height: 858px;
  //position: relative;
`
export const TypographyStyled = styled(Typography)`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 32px;
`
export const CloseButtonStyled = styled(CloseButton)`
  position: absolute;
  top: -20px;
  right: -20px;
`
export const LinkWrapper = styled.div`
  margin-top:32px;
  text-align:center;
  ${MainLink} {
    font-size:18px;
    color:#3ABD98;
    text-decoration:underline;
    &:hover {
      color: #2c9074;
    }
  }
`
export const AggrementWrapper = styled.div`
  display: flex;
  align-items: center;
  margin:12px 0 26px;
  text-align:left;

  & > a {
    color:#3ABD98;
    &:hover {
      color: #2c9074;
      text-decoration:underline;
    }
  }
`
