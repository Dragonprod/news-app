import { Stack } from '@mui/system';
import React from 'react';
import NewsCard from '../../../elements/cards/NewsCard';

const testNews = [
  {
    id: 0,
    categories: [{ name: 'Политика' }, { name: 'Экономика' }],
    title: 'Обогреваемые остановки наземного транспорта',
    text: 'За последние 7 лет я создал самый передовой в мире разговорный ИИ с открытым доменом для Replika - чат-бота №1 в США с более чем 10 миллионами пользователей.',
    commentsAmount: 10,
    likesAmount: 10349,
    date: '23.11.2022',
  },
  {
    id: 1,
    categories: [{ name: 'Политика' }, { name: 'Экономика' }],
    title: 'Обогреваемые остановки наземного транспорта',
    text: 'За последние 7 лет я создал самый передовой в мире разговорный ИИ с открытым доменом для Replika - чат-бота №1 в США с более чем 10 миллионами пользователей.',
    commentsAmount: 10,
    likesAmount: 10349,
    date: '23.11.2022',
  },
  {
    id: 2,
    categories: [{ name: 'Политика' }, { name: 'Экономика' }],
    title: 'Обогреваемые остановки наземного транспорта',
    text: 'За последние 7 лет я создал самый передовой в мире разговорный ИИ с открытым доменом для Replika - чат-бота №1 в США с более чем 10 миллионами пользователей.',
    commentsAmount: 10,
    likesAmount: 10349,
    date: '23.11.2022',
  },
];

export default function NewsGroup() {
  return (
    <Stack
      sx={{
        gap: '32px',
      }}>
      {testNews.map(news => (
        <NewsCard key={news.id} news={news} />
      ))}
    </Stack>
  );
}
