import React, { useCallback, useEffect } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { searchTaskByText } from '../../redux/actions/tasks'
import { getLastSearch, getLoadingState, getParsedTasks } from '../../redux/selectors'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { BaseImageCard } from '../../components/Cards/TaskCards/BaseImageCard';
import { SearchPanel } from '../../components/SearchPanel/SearchPanel'
import LinearProgress from '@mui/material/LinearProgress';

const PageWrapperStyled = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const parsedTasks = useSelector(getParsedTasks)
  const isLoading = useSelector(getLoadingState)
  const lastSearch = useSelector(getLastSearch)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchString = searchParams.get('text')

  useEffect(() => {
    if(lastSearch !== searchString) dispatch(searchTaskByText(searchString))
  }, [searchString])

  const handleSubmit = useCallback(({ text }) => {
    if(text.length) setSearchParams({ text })
  }, [])

  const clickHandler = useCallback((title, taksId) => () => navigate(`/task/${taksId}`, {
    state: {
      breadcrumbs: [{ to: `/search/?text=${searchString}`, text:`Результаты поиска для: ${searchString}`}, { text:title }]
    }
  }), [searchString])

  return (
    <PageWrapperStyled>
      <SearchPanel onSubmit={handleSubmit} value={searchString} loading={isLoading} />
      {isLoading ? <LinearProgress sx={{width:'50%'}}/> : parsedTasks?.length ? (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
        <Grid container spacing={4} sx={{alignItems:'stretch'}}>
          {parsedTasks.map(({md, ...rest}) => (
            <Grid item xs={12} md={md}>
              <BaseImageCard {...rest} onClick={clickHandler(rest.title, rest.id)}/>
            </Grid>
          ))}
        </Grid>
      </Box>
      ) : <div>Ничего не найдено</div> }
    </PageWrapperStyled>
  )
}
