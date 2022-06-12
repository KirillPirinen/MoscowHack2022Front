import React, { memo } from 'react'

export default memo(({ compType, registredContent, ...rest }) => {
  if(!compType || !registredContent.hasOwnProperty(compType)) return null

  const TypedComponent = registredContent[compType]

  return <TypedComponent {...rest} />
})
