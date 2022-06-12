import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { BaseImageCard } from '../../../components/Cards/TaskCards/BaseImageCard';
import { getParsedTasks } from '../../../redux/selectors';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function TaskList({ categoryTitle, categoryId }) {
  const parsedTasks = useSelector(getParsedTasks)
  const navigate = useNavigate()
  const clickHandler = useCallback((title, taksId) => () => navigate(`/task/${taksId}`, {
    state: {
      breadcrumbs: [{ to: `/category/${categoryId}`, text:categoryTitle}, { text:title }]
    }
  }), [])
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Grid container spacing={4} sx={{alignItems:'stretch'}}>
        {parsedTasks?.length ? parsedTasks.map(({md, ...rest}) => (
          <Grid item xs={12} md={md}>
            <BaseImageCard {...rest} onClick={clickHandler(rest.title, rest.id)} />
          </Grid>
        )) : <Grid item xs={12} md={12} alignContent="center">
              <Typography align='center'>К сожалению в данной категории eще нет задач</Typography>
          </Grid>}
      </Grid>
    </Box>
  );
}
