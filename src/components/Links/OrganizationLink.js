import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { msk, organization } from '../../images'
import { defaultFont } from '../styles/defaultStyles'

const styles = css`
  ${defaultFont(13)}
  height:36px;
  display:block;
  line-height:36px;
  text-decoration: none;
  color: #2FAB88;
  padding-left: 36px;
  background-size:28px;
  background-position:left center;
  background-repeat: no-repeat;
  &:hover {
    text-decoration: underline;
  }
`
export const OrganizationLinkStyled = styled(Link)(({ image = organization }) => css`
  background-image:url(${image});
  ${styles}
`)

export const ExternalOrganizationLink = styled('a')(({ image = organization }) => css`
  background-image:url(${image});
  ${styles}
`)

export const MosRuLink = (props) => <ExternalOrganizationLink {...props} image={msk} target="_blank" href="https://www.mos.ru/" />

export const OrganizationLink = ({onClick, ...rest}) => {
  const handleClick = (e) => {
    e.stopPropagation() 
    if(onClick) onClick()
  }
  return (
    <OrganizationLinkStyled onClick={handleClick} {...rest} />
  )
}
