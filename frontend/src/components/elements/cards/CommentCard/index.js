import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { styled } from '@mui/material/styles';

const Title = styled(Typography)({
  fontFamily: 'inherit',
  fontWeight: 800,
  fontSize: '14px',
  lineHeight: '140%',
  color: '#25222C',
});

const Date = styled(Typography)({
  fontFamily: 'inherit',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%',
  color: 'rgba(37, 34, 44, 0.5)',
});

const Text = styled(Date)({
  color: '#25222C',
});

const testComment = {
  id: 0,
  name: 'Имя',
  surname: 'Фамилия',
  text: ' За последние 7 лет я создал самый передовой в мире разговорный ИИ с открытым доменом для Replika - чат-бота №1 в США с более чем 10 миллионами пользователей. В начале этого года я покинул Replika, чтобы вывести последние достижения в области разговорного ИИ на новый уровень.',
};
export default function CommentCard({ comment = testComment }) {
  return (
    <Stack direction='row' sx={{ gap: '12px' }}>
      <Avatar />
      <Stack sx={{ gap: '8px' }}>
        <Stack direction='row' sx={{ gap: '12px' }}>
          <Title>
            {comment.surname} {comment.name}
          </Title>
          <Date>2 дня назад</Date>
        </Stack>
        <Text>{comment.text}</Text>
      </Stack>
    </Stack>
  );
}
