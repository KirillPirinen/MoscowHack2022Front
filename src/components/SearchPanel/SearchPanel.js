import styled from '@emotion/styled'
import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import { mobile } from '../../components/styles/media'
import SearchIcon from '@mui/icons-material/Search';
import { MainButton } from '../Buttons/MainButton';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getLoadingState } from '../../redux/selectors';

const FormStyled = styled.form`
  position: relative;
  width: 80%;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding-left: 3%;
  display: flex;
  align-items: center;
  margin-bottom:50px;
  max-width: 600px;
  @media ${mobile} {
    width:100%;
    margin-bottom:0 10px 50px 10px; 
  }
`
const MainButtonStyled = styled(MainButton)`
  height:100%;
  padding-top:0;
  padding-bottom:0;
  border:1px solid rgba(0, 0, 0, 0.1);
`

export const SearchPanel = ({ onSubmit, value, loading = false }) => {
  const { register, handleSubmit } = useForm({ 
    defaultValues: { text: value || '' }
  })
  
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <SearchIcon sx={{fill:'#747474'}} />
        <InputBase
          sx={{ ml: 1, flex: 1, pr:'15px' }}
          placeholder="Найди свое доброе дело"
          inputProps={{ 'aria-label': 'Найди свое доброе дело' }}
          error="ошибочка"
          {...register("text")}
        />
        <MainButtonStyled type="submit" text="Поиск" loading={loading}/>
      </FormStyled>
  )
}
