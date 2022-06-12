import React, { useCallback, useState } from 'react'
import TextField from '@mui/material/TextField';
import { GreenButton } from '../Buttons/GreenButton';
import { clearModal } from '../../redux/actions/modal.ac';
import { FormStyled, TypographyStyled, CloseButtonStyled, AggrementWrapper } from './auth.styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { regValidation } from '../../utils/validation'
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/actions/user.ac';
import { getLoadingState } from '../../redux/selectors';

export const RegisterForm = () => {

  const { register, handleSubmit, control, formState: { errors }  } = useForm({
    resolver: yupResolver(regValidation),
    defaultValues: { sex: 'male' }
  })
  const isLoading = useSelector(getLoadingState)
  const [type, setType] = useState('volunteer')
  const isOrg = type !== 'volunteer'

  const handleChange = useCallback((e) => {
    setType(e.target.value)
  }, [])

  const dispatch = useDispatch()
  const onSubmit = (data) => dispatch(signUp(data))

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} noValidate>
      <TypographyStyled
        variant="h6"
      >Регистрация аккаунта
      </TypographyStyled>
      <FormControl fullWidth sx={{ mb:'20px'}}>
        <InputLabel required>Выберите тип аккаунта</InputLabel>
        <Select {...register("role")} value={type} onChange={handleChange} label="Выберите тип аккаунта">
          <MenuItem value={'volunteer'}>Волонтер</MenuItem>
          <MenuItem value={'non-profit'}>Некоммерческим организация</MenuItem>
          <MenuItem value={'commercial'}>Бизнес-партнер</MenuItem>
        </Select>
      </FormControl>
      {isOrg && <TextField
        required
        fullWidth 
        label="Название организации" 
        variant="outlined"
        sx={{ mb:'20px'}}
        {...register("organization")}
        error={errors.organization}
        helperText={errors.organization?.message}
      />}
      <InputLabel>Пол</InputLabel>
      <RadioGroup control={control} defaultValue="male" sx={{ mb:'20px'}} row {...register("sex")}>
        <FormControlLabel control={<Radio value="female" />} label="Женский" />
        <FormControlLabel control={<Radio value="male" />} label="Мужской" />
      </RadioGroup>
      <TextField
        required
        fullWidth 
        label="Имя" 
        variant="outlined" 
        sx={{ mb:'20px'}}
        {...register("first_name")}
        error={errors.first_name}
        helperText={errors.first_name?.message}
      />
      <TextField 
        fullWidth 
        label="Фамилия" 
        variant="outlined" 
        sx={{ mb:'20px'}}
        {...register("last_name")}
        error={errors.last_name}
        helperText={errors.last_name?.message}
      />
      <TextField 
        fullWidth
        required
        label="Email" 
        variant="outlined" 
        sx={{ mb:'20px'}}
        {...register("email")}
        error={errors.email}
        helperText={errors.email?.message}
      />
      <TextField 
        fullWidth
        label="Телефон" 
        variant="outlined" 
        sx={{ mb:'20px'}}
        {...register("phone")}
        error={errors.phone}
        helperText={errors.phone?.message}
      />
      <TextField 
        fullWidth 
        required
        label="Пароль" 
        variant="outlined" 
        sx={{ mb:'20px'}}
        {...register("password")}
        error={errors.password}
        helperText={errors.password?.message}
      />
      <AggrementWrapper>
        <div><Checkbox /></div>
        <Typography variant='body'>Я согласен на&nbsp; 
        <Link 
          href="https://www.mos.ru/legal/confidential/" 
          underline="hover"
          target="_blank"
          color="secondary"
        >
        обработку персональных данных
        </Link></Typography>
      </AggrementWrapper>
      <GreenButton loading={isLoading} text="Зарегистрироваться" type="submit" fullWidth/>
      <CloseButtonStyled onClick={clearModal}/>
    </FormStyled>
  )
}
