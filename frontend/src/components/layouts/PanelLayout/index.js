import { Stack } from '@mui/material';
import React, { useContext } from 'react';
import { MainContext } from '../../../context/MainContextProvider';
import NewsDrawer from '../../elements/drawer/NewsDrawer';
import NewsTable from '../../elements/tables/NewsTable';

export default function PanelLayout() {
  const { isNewsDrawerOpen, setIsNewsDrawerOpen } = useContext(MainContext);

  return (
    <>
      <Stack sx={{ gap: '32px', m: '64px auto', maxWidth: 'var(--max-width)' }}>
        <NewsTable />
      </Stack>
      <NewsDrawer
        open={isNewsDrawerOpen}
        onClose={() => setIsNewsDrawerOpen(false)}
      />
    </>
  );
}
