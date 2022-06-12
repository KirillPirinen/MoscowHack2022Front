import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { defaultFont } from '../styles/defaultStyles'

export const MainLink = styled(Link)`
  ${defaultFont()}
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`
