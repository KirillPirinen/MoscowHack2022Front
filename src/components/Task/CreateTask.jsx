import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Stack,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { GreenButton } from '../Buttons/GreenButton';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { addNewTask, getCategories } from '../../redux/actions/tasks';

import { clearModal } from '../../redux/actions/modal.ac';
import {
  FormStyled,
  TypographyStyled,
  ChipStyled,
  StackStyled,
  TagCreatorChipStyled,
  SectionStyled,
  TagInputStyled,
} from './createTask.styles';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { FormHelperText, FormControl } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { createTaskValidation } from '../../utils/validation';
import { setModal } from '../../redux/actions/modal.ac';
export const CreateTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(createTaskValidation),
  });

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.tasks.categories);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const newTag = useWatch({ control, name: 'newTag' });
  const newSkill = useWatch({ control, name: 'newSkill' });
  const [tags, setTag] = useState([]);
  const [skills, setSkill] = useState([]);
  const [tagOpen, setTagOpen] = useState(false);
  const [skillOpen, setSkillOpen] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const addTagToCollection = () => {
    if (newTag && newTag !== '') {
      setTag([...tags, newTag]);
      setValue('newTag', '');
      setTagOpen(!tagOpen);
    } else {
      setTagOpen(!tagOpen);
    }
  };

  const addSkillToCollection = () => {
    if (newSkill && newSkill !== '') {
      setSkill([...skills, newSkill]);
      setValue('newSkill', '');
      setSkillOpen(!skillOpen);
    } else {
      setSkillOpen(!skillOpen);
    }
  };

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const onSubmit = (data) => {
    const { newTag, newSkill, ...other } = data;
    const formData = new FormData();
    formData.append('taskImg', acceptedFiles[0]);
    formData.append('tags', tags);
    formData.append('skills', skills);
    const date = new Date(other.deadline)
    other.deadline = date.toISOString();
    for (const key in other) {
      if (other[key] === 'undefined') {
        formData.append(key, '');
      } else {
        formData.append(key, other[key]);
      }
    }
    console.log('privet')
    dispatch(addNewTask(formData));
    setModal(null)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <TypographyStyled variant="h6">Создать задание</TypographyStyled>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Controller
              control={control}
              {...register('organization')}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <InputLabel id="organization">Юридическое лицо</InputLabel>
                    <Select
                      defaultValue={''}
                      disabled
                      labelId={'organization'}
                      label={'Юридическое лицо'}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                );
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Controller
              control={control}
              name={'CategoryId'}
              {...register('CategoryId')}
              render={({ field }) => {
                return (
                  <FormControl error={errors.CategoryId} fullWidth>
                  
                    <InputLabel id="taskCat">
                      Выберите категорию задачи
                    </InputLabel>
                    <Select
                      {...field}
                      defaultValue={''}
                      disabled={categories ? false : true}
                      labelId={'taskCat'}
                      label={'Выберите категорию задачи'}
                      
                      helperText={errors.CategoryId?.message}
                    >
                      {categories &&
                        categories.map((el) => (
                          <MenuItem key={el.value} value={el.value}>
                            {el.item}
                          </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>
                      {errors.CategoryId?.message}
                    </FormHelperText>
                  </FormControl>
                );
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Controller
              name={'organizationName'}
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  disabled
                  label="Название организации"
                  variant="outlined"
                  {...register('organizationName')}
                  error={errors.organizationName}
                  helperText={errors.organizationName?.message}
                />
              )}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Controller
              control={control}
              {...register('startDate')}
              render={({ field }) => {
                return (
                  <DatePicker
                    {...field}
                    sx={{ mb: '20px' }}
                    label="Дата начала"
                    TextFieldProps={{
                      fullWidth: 'fullWidth',
                      error: errors.startDate,
                      helperText: errors.startDate?.message,
                    }}
                    renderInput={(params) => {
                      return <TextField {...params} />;
                    }}
                  />
                );
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Controller
              name={'title'}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Название задачи"
                  variant="outlined"
                  sx={{ mb: '20px' }}
                  {...register('title')}
                  error={errors.title}
                  helperText={errors.title?.message}
                />
              )}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <Controller
              control={control}
              name={'deadline'}
              {...register('deadline')}
              render={({ field }) => {
                return (
                  <DatePicker
                    {...field}
                    sx={{ mb: '20px' }}
                    label="Дата окончания"
                    TextFieldProps={{
                      fullWidth: 'fullWidth',
                      error: errors.deadline,
                      helperText: errors.deadline?.message,
                    }}
                    renderInput={(params) => {
                      return <TextField {...params} />;
                    }}
                  />
                );
              }}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <Controller
              name={'description'}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Описание задачи"
                  multiline
                  rows={4}
                  error={errors.description}
                  helperText={errors.description?.message}
                />
              )}
            />
          </Grid>
        </Grid>
        <TypographyStyled
          style={{ marginTop: '30px', marginBottom: '10px' }}
          variant="h6"
        >
          Выберите теги
        </TypographyStyled>
        <Grid container spacing={1}>
          <Grid item md={12} xs={12}>
            <StackStyled direction="row" spacing={1}>
              {tags.map((el) => (
                <ChipStyled key={el} label={el} variant="outlined" />
              ))}

              <TagInputStyled
                autoFocus={true}
                style={tagOpen ? {} : { display: 'none' }}
                endAdornment={
                  <LibraryAddIcon
                    onClick={addTagToCollection}
                    style={{ height: '26px', color: '#3ABD98' }}
                  />
                }
                {...register('newTag')}
              />
              <TagCreatorChipStyled
                onClick={() => setTagOpen(!tagOpen)}
                label="Введите свое название"
                variant="outlined"
              />
            </StackStyled>
          </Grid>
          <TypographyStyled
            style={{ marginTop: '30px', marginBottom: '10px' }}
            variant="h6"
          >
            Добавьте нужные навыки
          </TypographyStyled>
          <Grid item md={12} xs={12}>
            <StackStyled direction="row" spacing={1}>
              {skills.map((el) => (
                <ChipStyled key={el} label={el} variant="outlined" />
              ))}

              <TagInputStyled
                autoFocus={true}
                style={skillOpen ? {} : { display: 'none' }}
                endAdornment={
                  <LibraryAddIcon
                    onClick={addSkillToCollection}
                    style={{ height: '26px', color: '#3ABD98' }}
                  />
                }
                {...register('newSkill')}
              />
              <TagCreatorChipStyled
                onClick={() => setSkillOpen(!skillOpen)}
                label="Введите свое название"
                variant="outlined"
              />
            </StackStyled>
          </Grid>
          <Grid
            direction="column"
            alignItems="center"
            justifyContent="center"
            container
            item
            md={12}
            xs={12}
          >
            <SectionStyled
              style={{ width: '100%', height: '100%' }}
              {...getRootProps({ style: { color: '#2c9074' } })}
              className="container"
            >
              <input {...getInputProps()} {...register('taskImg')} />
              {files.length ? (
                <ul>{files}</ul>
              ) : (
                <p>Перетащите или выберите файл для заставки вышей задачи</p>
              )}
            </SectionStyled>
          </Grid>
        </Grid>

        <GreenButton loading={false} type="submit" text="Создать" fullWidth />
        {/*<CloseButtonStyled onClick={clearModal}/>*/}
      </FormStyled>
    </LocalizationProvider>
  );
};
