import { Typography } from '@material-ui/core'
import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { TimeButton } from '../Buttons/TimeButton'
import { setModal } from '../../redux/actions/modal.ac'

const TypographyStyled = styled(Typography)`
  color: '#818181';
  margin: 36px 0 18px;
`
const Wrapper = styled.div`
  display: flex;
  flex-basis: auto;
  justify-content: flex-start;
  flex-wrap:wrap;
  gap: 16px;
`

export const EventsTime = ({ events }) => {
  const handleClick = useCallback((props) => () => setModal('EVENT', props), [])
  return (
    <>
      <TypographyStyled variant='subtitle1'>{events[0].date}</TypographyStyled>
      <Wrapper>
        {events.map(button => <TimeButton
          key={button.id}
          text={button.time}
          onClick={handleClick(button)}
          disabled={button.expired}
        />)}
      </Wrapper>
    </>
  )
}
