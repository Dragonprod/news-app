import { Box, Stack } from '@mui/system';
import React from 'react';
import TabButton from '../../elements/buttons/TabButton';
import NewsGroup from '../../modules/groups/NewsGroup';

const testCategories = [
  {
    name: 'Политика',
  },
  {
    name: 'Экономика',
  },
  {
    name: 'Крипто',
  },
  {
    name: 'Природа',
  },
  {
    name: 'История',
  },
  {
    name: 'Путешествия',
  },
  {
    name: 'Программирование',
  },
  {
    name: 'Техника',
  },
  {
    name: 'Спорт',
  },
  {
    name: 'IT',
  },
  {
    name: 'Культура',
  },
];

export default function SurveysLayout() {
  return (
    <Stack sx={{ gap: '32px', m: '64px auto', maxWidth: 'var(--max-width)' }}>
      <Stack
        direction='row'
        sx={{
          gap: '32px',
          m: '0 auto',
          maxWidth: 'var(--max-width)',
          overflowX: 'auto',
          pb: 1,

          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}>
        {testCategories.map(category => (
          <TabButton key={category.name} sx={{ flexShrink: 0 }}>
            {category.name}
          </TabButton>
        ))}
      </Stack>
      <NewsGroup />
    </Stack>
  );
}
