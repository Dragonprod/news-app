import { CardMedia, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import TagChip from '../../chips/TagChip';
import BaseDrawer from '../BaseDrawer';
import { styled } from '@mui/material/styles';

const Title = styled(Typography)({
  maxWidth: '440px',
  fontFamily: 'inherit',
  fontWeight: 700,
  fontSize: '20px',
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

export default function NewsDrawer({ open, onClose }) {
  return (
    <BaseDrawer open={open} onClose={onClose}>
      <Stack sx={{ maxWidth: '684px', p: 4, gap: '32px' }}>
        <Title component='h2'>
          Обогреваемые остановки наземного транспорта
        </Title>
        <Stack sx={{ gap: '16px' }}>
          <CardMedia
            component='img'
            height='360'
            image='https://img.artlebedev.ru/everything_files/images/6034/ostanovkus6-1200.jpg.webp'
            alt='bus stop'
            sx={{ borderRadius: '12px' }}
          />
          <Stack direction='row' sx={{ gap: '12px' }}>
            {['a', 'b'].map(img => (
              <img
                key={img}
                src='https://img.artlebedev.ru/everything_files/images/6034/ostanovkus6-1200.jpg.webp'
                width={60}
                height={48}
                alt={img}
                style={{ borderRadius: '4px' }}
              />
            ))}
          </Stack>
        </Stack>
        <Stack sx={{ gap: '24px' }}>
          <Stack direction='row' sx={{ gap: '8px' }}>
            {['Политика', 'Экономика'].map(category => (
              <TagChip key={category} label={category} />
            ))}
          </Stack>
          <Text>
            За последние 7 лет я создал самый передовой в мире разговорный ИИ с
            открытым доменом для Replika - чат-бота №1 в США с более чем 10
            миллионами пользователей. В начале этого года я покинул Replika,
            чтобы вывести последние достижения в области разговорного ИИ на
            новый уровень. Наше новое приложение Botify позволяет пользователям
            создавать фотореалистичные цифровые персоны для увлекательных бесед.
            Для каждой цифровой персоны можно настроить индивидуальный персонаж
            и таким образом создать уникальную личность любого человека. Хотите
            поговорить с Маском о колонизации Марса? Может быть, вы хотите
            спросить Иисуса о шумихе вокруг NFT? Вы можете сделать все это в
            Botify.
          </Text>
        </Stack>
        <Stack sx={{ gap: '32px' }}>
          <Title component='h2'>Комментарии</Title>
          <Stack>
            {['a', 'b'].map(img => (
              <div key={img}>comment</div>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </BaseDrawer>
  );
}
