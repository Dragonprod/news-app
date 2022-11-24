import { Stack } from '@mui/material';
import React, { useContext } from 'react';
import { MainContext } from '../../../context/MainContextProvider';
import EditNewsDrawer from '../../elements/drawer/EditNewsDrawer';
import NewsTable from '../../elements/tables/NewsTable';

export default function PanelLayout() {
  const { isEditDrawerOpen, setIsEditDrawerOpen } = useContext(MainContext);

  return (
    <>
      <Stack sx={{ gap: '32px', m: '64px auto', maxWidth: 'var(--max-width)' }}>
        <NewsTable />
      </Stack>
      <EditNewsDrawer
        open={isEditDrawerOpen}
        onClose={() => setIsEditDrawerOpen(false)}
      />
    </>
  );
}
