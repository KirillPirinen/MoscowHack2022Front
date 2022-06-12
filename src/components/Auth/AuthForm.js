import React, { useCallback } from 'react'
import TextField from '@mui/material/TextField';
import { GreenButton } from '../Buttons/GreenButton';
import { clearModal, setModal } from '../../redux/actions/modal.ac';
import { MainLink } from '../Links/MainLink';
import { FormStyled, TypographyStyled, CloseButtonStyled, LinkWrapper } from './auth.styles';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { authValidation } from '../../utils/validation'
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/actions/user.ac';
import { getLoadingState } from '../../redux/selectors';

export const AuthForm = () => {  
  const { register, handleSubmit, formState: { errors }  } = useForm({
    resolver: yupResolver(authValidation)
  })
  const isLoading = useSelector(getLoadingState)
  const onRegister = useCallback((e) => {
    e.preventDefault()
    setModal('REGISTRATION')
  }, [])

  const dispatch = useDispatch()

  const onSubmit = (data) => dispatch(signIn(data))

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <TypographyStyled
        variant="h6"
      >Введите адрес электронной почты, чтобы зайти в свой кабинет
      </TypographyStyled>
      <TextField
        fullWidth 
        label="Email" 
        variant="outlined"
        sx={{ mb:'20px'}}
        {...register("email")}
        error={errors.email}
        helperText={errors.email?.message}
      />
      <TextField 
        fullWidth 
        label="Пароль" 
        variant="outlined" 
        sx={{ mb:'20px' }}
        {...register("password")}
        error={errors.password}
        helperText={errors.password?.message}
      />
      <GreenButton loading={isLoading} type="submit" text="Войти" fullWidth/>
      <CloseButtonStyled onClick={clearModal}/>
      <LinkWrapper>
        <MainLink to="/" onClick={onRegister}>Зарегистрироваться</MainLink>
      </LinkWrapper>
    </FormStyled>
  )
}
