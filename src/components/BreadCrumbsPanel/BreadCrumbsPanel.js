import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MainLink } from '../Links';

export const BreadCrumb = ({ to, text }) => to ? <MainLink to={to}>{text}</MainLink> : <Typography color="text.secondary" key="3">{text}</Typography>

export default function BreadCrumbsPanel({ children }) {
  return (
    <Stack spacing={2} marginBottom="50px">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {children}
      </Breadcrumbs>
    </Stack>
  );
}


