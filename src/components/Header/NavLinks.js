import React from "react"
import { MainLink } from "../Links"
import styled from '@emotion/styled'

const LinksWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1 2;
  margin-right: 30px;
  ${MainLink} {
    margin: 10px;
  }
`

export const NavLinks = ({ user: { email } }) => (
  <LinksWrapper>
    <MainLink to="/about">О сервисе</MainLink>
    {email && <MainLink to="profile">{email}</MainLink>}
  </LinksWrapper>
)
