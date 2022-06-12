import React from 'react'
import { LocationOn, Schedule } from '@mui/icons-material';
import { OrganizationLink } from '../../../Links/OrganizationLink';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { IconWidthTextWrapper } from '../../cards.style'

const Wrapper = styled.div`
  &, & > * {
    margin-bottom: 10px;
  }
`
const LinkWrapper = styled.div`
  display:flex;
  align-items:center;
`

export const CardInfo = ({ location, creator = {}, deadline }) => (
  <Wrapper>
    {creator.first_name && (
      <LinkWrapper>
      <OrganizationLink image={creator.avatar} to={`/user/${creator.id}`}>{creator.first_name + ' ' + creator.last_name || ' '}</OrganizationLink>
      {creator.rating && (
        <>
          <StarIcon fontSize='small' sx={{ fill:'#F1DA62', margin:'0 7px 0 10px' }} />
          <Typography variant="body2" color="text.secondary">{`${creator.rating}/5`}</Typography>
        </>
      )}
    </LinkWrapper>
    )}
    {location && (
      <IconWidthTextWrapper>
      <LocationOn sx={{fill: '#747474'}} />
      <Typography variant='body2' color='text.secondary'>
        {location}
      </Typography>
    </IconWidthTextWrapper>
    )}
    {deadline && (
      <IconWidthTextWrapper>
      <Schedule sx={{fill: '#747474'}} />
      <Typography variant='body2' color='text.secondary'>
        {deadline}
      </Typography>
    </IconWidthTextWrapper>
    )}
  </Wrapper>
)
