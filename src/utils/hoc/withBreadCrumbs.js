import React from 'react'
import { useLocation } from "react-router-dom"
import BreadCrumbsPanel, { BreadCrumb } from "../../components/BreadCrumbsPanel/BreadCrumbsPanel"

export const withBreadCrumbs = Comp => props => {
  const { state } = useLocation()
  const breadcrumbs = state?.breadcrumbs
  return (
    <>
      {breadcrumbs && <BreadCrumbsPanel>
        {breadcrumbs.map(crumb => <BreadCrumb key={crumb.text} {...crumb} /> )}
      </BreadCrumbsPanel>}
      <Comp breadcrumbs={breadcrumbs} {...props} />
    </>
  )
}
