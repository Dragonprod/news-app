import { Drawer } from '@mui/material';
import React from 'react';

export default function BaseDrawer({ children, anchor, open, onClose }) {
  return (
    <Drawer anchor={anchor} open={open} onClose={onClose}>
      {children}
    </Drawer>
  );
}
