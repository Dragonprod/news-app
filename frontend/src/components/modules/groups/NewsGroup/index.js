import { Stack } from '@mui/system';
import React from 'react';
import NewsCard from '../../../elements/cards/NewsCard';

export default function NewsGroup() {
  return (
    <Stack
      sx={{
        gap: '32px',
      }}>
      <NewsCard />
    </Stack>
  );
}
