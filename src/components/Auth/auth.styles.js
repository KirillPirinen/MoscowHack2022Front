import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { CloseButton } from '../Buttons/CloseButton';
import { MainLink } from '../Links/MainLink';

export const FormStyled = styled.form`
  max-width: 350px;
  position: relative;
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
