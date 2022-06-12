import { Typography } from '@material-ui/core'
import React, { useEffect, memo } from 'react'
import { Banner } from '../../components/Banner/Banner'
import DefaultWidgetWrapper, { DefaultWidgetLoader } from '../../components/DefaultWidgetWrapper'
import { EventsTime } from '../../components/EventsTime/EventsTime'
import { useDispatch, useSelector } from 'react-redux'
import { getCalendarEvents } from '../../redux/actions/calendar.ac'
import { getParsedCalendarEvents, hasCalendarError, isCalendarLoading } from '../../redux/selectors/calendar'

export const Calendar = memo(() => {
  const dispatch = useDispatch()
  const loading = useSelector(isCalendarLoading)
  const error = useSelector(hasCalendarError)
  const parsedEvents = useSelector(getParsedCalendarEvents)

  useEffect(() => {
    if(!parsedEvents.length) dispatch(getCalendarEvents())
  },[dispatch])

  return (
    <DefaultWidgetWrapper>
        <Banner />
        <Typography variant="h5" alignLeft sx={{ fontWeight: 500 }}>График ближайших событий/мероприятий</Typography>
      <DefaultWidgetLoader loading={loading} error={error}>
        {parsedEvents.map(eventsList => (
          <EventsTime key={eventsList[0].date} events={eventsList}/>
        ))}
      </DefaultWidgetLoader>
    </DefaultWidgetWrapper>
  )
})
