import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MainButton } from '../MainButton';

const ToggleButton = () => {

  const [alignment, setAlignment] = useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  }

  return (
    <ToggleButtonGroup size="small" {...control}>
        <MainButton/>
        <MainButton/>
    </ToggleButtonGroup>
  )
}
