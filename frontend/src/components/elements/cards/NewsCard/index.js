import { Button, Chip, Paper, Typography } from '@mui/material';
import React from 'react';
import AppButton from '../../buttons/AppButton';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Title = styled(Typography)({
  fontFamily: 'inherit',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#25222C',
});

const Text = styled(Typography)({
  fontFamily: 'inherit',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '16px',
  color: '#25222C',
});

export default function NewsCard() {
  return (
    <Paper elevation={0} sx={{ borderRadius: '16px' }}>
      <Stack direction='row' sx={{ gap: '12px', m: 2 }}>
        <Chip
          label='Политика'
          sx={{
            color: '#fff',
            background: 'var(--color-primary)',
            fontFamily: 'inherit',
            flexShrink: 0,
          }}
        />
        <Chip
          label='Экономика'
          sx={{
            color: '#fff',
            background: 'var(--color-primary)',
            fontFamily: 'inherit',
            flexShrink: 0,
          }}
        />
      </Stack>
      <Stack sx={{ gap: '24px', margin: '0 16px 24px' }}>
        <Title>Обогреваемые остановки наземного транспорта</Title>
        <Text>
          За последние 7 лет я создал самый передовой в мире разговорный ИИ с
          открытым доменом для Replika - чат-бота №1 в США с более чем 10
          миллионами пользователей.
        </Text>
      </Stack>
      <Stack direction='row' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' sx={{ gap: '24px', m: 2 }}>
          <Stack direction='row' alignItems='center' sx={{ gap: '12px' }}>
            <ChatBubbleOutlineIcon />
            10
          </Stack>
          <Stack direction='row' alignItems='center' sx={{ gap: '12px' }}>
            <FavoriteBorderIcon />
            10123
          </Stack>
          <Stack direction='row' alignItems='center' sx={{ gap: '12px' }}>
            23.11.22
          </Stack>
        </Stack>
        <Stack direction='row' alignItems='center' sx={{ gap: '24px' }}>
          <Button
            startIcon={<FavoriteBorderIcon />}
            sx={{
              color: 'var(--color-primary)',
              textTransform: 'none',
              fontFamily: 'inherit',
            }}>
            Оценить
          </Button>
          <AppButton sx={{ borderRadius: '16px 0', p: 2 }}>Подробнее</AppButton>
        </Stack>
      </Stack>
    </Paper>
  );
}
