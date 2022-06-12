import React from 'react'
import { OrganizationLink } from '../../../Links/OrganizationLink';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


const Wrapper = styled.div`
  &, & > * {
    margin-bottom: 10px;
  }
`
const LinkWrapper = styled.div`
  display:flex;
  align-items:center;
`

const OrganizationWrapeer = styled.div`
  display:flex;
  flex-direction: column;
`

export const UserInfo = ({ rating, bio, organization }) => (
  <Wrapper>
    <LinkWrapper>
      {Boolean(organization) && (
        <OrganizationWrapeer>
          <Typography variant="body2" color="text.secondary">Представитель организации</Typography>
          <OrganizationLink to={`/organization/${organization.id}`}>{organization.name}</OrganizationLink>
        </OrganizationWrapeer>
      )}
      {Boolean(rating) && (
        <>
          <StarIcon fontSize='small' sx={{ fill:'#F1DA62', margin:'0 7px 0 10px' }} />
          <Typography variant="body2" color="text.secondary">{`${rating}/5`}</Typography>
        </>
      )}
    </LinkWrapper>
    {bio && (
        <Typography variant='body2' color='text.secondary'>
          {bio}
        </Typography>
    )}
  </Wrapper>
)
