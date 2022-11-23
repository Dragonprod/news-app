import { Stack } from '@mui/system';
import React from 'react';
import SurveyCard from '../../../elements/cards/SurveyCard';

export default function NewsGroup() {
  return (
    <Stack
      sx={{
        gap: '32px',
      }}>
      <SurveyCard />
      <SurveyCard />
      <SurveyCard />
      <SurveyCard />
      <SurveyCard />
      <SurveyCard />
      <SurveyCard />
      <SurveyCard />
      <SurveyCard />
      <SurveyCard />
    </Stack>
  );
}
