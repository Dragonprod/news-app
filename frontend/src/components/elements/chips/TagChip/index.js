import { Chip } from '@mui/material';
import React from 'react';

export default function TagChip({ label }) {
  return (
    <Chip
      label={label}
      sx={{
        color: '#fff',
        background: 'var(--color-primary)',
        fontFamily: 'inherit',
        flexShrink: 0,
      }}
    />
  );
}
