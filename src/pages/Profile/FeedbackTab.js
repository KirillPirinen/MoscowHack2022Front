import React from 'react'
import { Feedbacks } from '../../components/Feedbacks'
import { useSelector } from 'react-redux';
import { getUserRecievedReviews } from '../../redux/selectors';

export const FeedbackTab = () => {
  const reviews = useSelector(getUserRecievedReviews)
  return <Feedbacks list={reviews} />
}
