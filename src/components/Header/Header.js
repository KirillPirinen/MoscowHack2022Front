import styled from '@emotion/styled'
import React, { useCallback } from 'react'
import { MainButton } from '../Buttons/MainButton'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { setModal } from '../../redux/actions/modal.ac'
import { useDispatch, useSelector } from 'react-redux'
import { getUserState } from '../../redux/selectors'
import { signOut } from '../../redux/actions/user.ac'

const WrapperStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap:2%;
`

export const Header = () => {
  const user = useSelector(getUserState)
  const dispatch = useDispatch()
  const onLogin = useCallback(() => setModal('LOGIN'), [])
  const onLogout = useCallback(() => dispatch(signOut()), [])

  return (
    (
      <WrapperStyled>
        <Logo text="Anyone.ru" />
        <NavLinks user={user} />
        <div>
          {!user.email ? <MainButton text="Войти" onClick={onLogin} /> : <MainButton text="Выйти" onClick={onLogout} />}
        </div>
      </WrapperStyled>
    )
  )
}
