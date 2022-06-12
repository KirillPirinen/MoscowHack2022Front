import React from 'react'
import Typography from '@mui/material/Typography';
import { UserInfo } from './UserInfo'
import styled from '@emotion/styled';
import { Container, CardMediaStyled, CommonDetailWrapper } from '../cards.style'
import { useTheme } from '@emotion/react';
import { TooltipButtonMail, TooltipButtonPhone } from './UserInfo/TolltipButton'
import { Button, IconButton } from '@mui/material';
import { PersonAdd, PlusOne } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { editUserAvatar } from '../../../redux/actions/user.ac';

const ContentWrapper = styled.div`
  width:100%;
  margin: 20px;
`
const TitleButtonWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`
const AvatarEdior = styled(Button)`
  background:transparent;
  cursor:pointer;
  display:block;
  text-align:center;
  & > svg {
    fill: black;
  }
  & > input {
    display:none;
  }
`

export const ProfileUserHeader = ({ first_name, last_name, email, phone, avatar, rating, organization, bio }) => {
  const dispatch = useDispatch()

  const avatarHandler = (e) => {
    const avatar = new FormData()
    avatar.append('avatar', e.target.files[0])
    dispatch(editUserAvatar(avatar))
  }

  return (
        <CommonDetailWrapper>
          <Container>
            <CardMediaStyled
              sx={{ height: 200, minWidth: 200, maxWidth: 350, marginRight: '16px', borderRadius: '16px' }}
              component="img"
              image={avatar}
            />
            <div style={{marginTop:'15px'}}> 
            <AvatarEdior as="label" onChange={avatarHandler}>
              Изменить аватар
              <input name="avatar" type="file"/>
            </AvatarEdior>
            </div>
          </Container>
          <ContentWrapper>
            <TitleButtonWrapper>
              <Typography gutterBottom variant="h6" component="div" lineHeight={1.2} margin={0}>
                {`${first_name} ${last_name || ''}`}
              </Typography>
              <div>
                <TooltipButtonMail email={email} />
                {phone && <TooltipButtonPhone phone={phone} />}
              </div>
            </TitleButtonWrapper>
            <UserInfo rating={rating} organization={organization} bio={bio}/>
          </ContentWrapper>
        </CommonDetailWrapper>
  )
}
