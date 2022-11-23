import { Stack } from '@mui/material';
import React from 'react';
import NewsTable from '../../elements/tables/NewsTable';

export default function PanelLayout() {
  return (
    <Stack sx={{ gap: '32px', m: '64px auto', maxWidth: 'var(--max-width)' }}>
      <NewsTable />
    </Stack>
  );
}
