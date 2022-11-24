import { CardMedia, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useContext, useState } from 'react';
import TagChip from '../../chips/TagChip';
import BaseDrawer from '../BaseDrawer';
import { styled } from '@mui/material/styles';
import AppButton from '../../buttons/AppButton';
import { MainContext } from '../../../../context/MainContextProvider';

const TitleInput = styled(TextField)({
  '& input': {
    fontFamily: 'inherit',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '22px',
    color: '#25222C',
  },
});

const TextInput = styled(TextField)({
  '& input': {
    fontFamily: 'inherit',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '16px',
    color: '#25222C',
  },
});

const testNews = {
  id: 0,
  title: 'Обогреваемые остановки наземного транспорта',
  attachments: [
    {
      id: 0,
      src: 'https://img.artlebedev.ru/everything_files/images/6034/ostanovkus6-1200.jpg.webp',
    },
    {
      id: 1,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Bus_Stops_2_curitiba_brasil.jpg/1200px-Bus_Stops_2_curitiba_brasil.jpg',
    },
    {
      id: 2,
      src: 'https://www.streetpark.eu/wp-content/uploads/compress-images/2018/10/streetpark-zastavkovy-pristresek-FRAMEO-ZPF602-01.jpg',
    },
  ],
  categories: [{ name: 'Политика' }, { name: 'Экономика' }],
  text: 'За последние 7 лет я создал самый передовой в мире разговорный ИИ с открытым доменом для Replika - чат-бота №1 в США с более чем 10 миллионами пользователей. В начале этого года я покинул Replika, чтобы вывести последние достижения в области разговорного ИИ на новый уровень. Наше новое приложение Botify позволяет пользователям создавать фотореалистичные цифровые персоны для увлекательных бесед. Для каждой цифровой персоны можно настроить индивидуальный персонаж и таким образом создать уникальную личность любого человека. Хотите поговорить с Маском о колонизации Марса? Может быть, вы хотите спросить Иисуса о шумихе вокруг NFT? Вы можете сделать все это в Botify.',
  comments: [
    {
      id: 0,
      name: 'Имя',
      surname: 'Фамилия',
      text: ' За последние 7 лет я создал самый передовой в мире разговорный ИИ с открытым доменом для Replika - чат-бота №1 в США с более чем 10 миллионами пользователей. В начале этого года я покинул Replika, чтобы вывести последние достижения в области разговорного ИИ на новый уровень.',
    },
    {
      id: 1,
      name: 'Имя',
      surname: 'Фамилия',
      text: ' За последние 7 лет я создал самый передовой в мире разговорный ИИ с открытым доменом для Replika - чат-бота №1 в США с более чем 10 миллионами пользователей. В начале этого года я покинул Replika, чтобы вывести последние достижения в области разговорного ИИ на новый уровень.',
    },
  ],
};

export default function EditNewsDrawer({ open, onClose, news = testNews }) {
  const [selectedPhoto, setSelectedPhoto] = useState(news.attachments[0]);
  const [title, setTitle] = useState(news.title);
  const [text, setText] = useState(news.text);
  const { setIsEditDrawerOpen } = useContext(MainContext);

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleChangeText = e => {
    setText(e.target.value);
  };

  const handleSelectPhoto = img => {
    setSelectedPhoto(img);
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ title, text });

    setIsEditDrawerOpen(false);
  };

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <Stack
        component='form'
        onSubmit={handleSubmit}
        sx={{ width: '694px', p: 4, gap: '32px' }}>
        <TitleInput
          value={title}
          onChange={handleChangeTitle}
          placeholder='Заголовок'
          variant='outlined'
        />
        <Stack sx={{ gap: '16px' }}>
          <CardMedia
            component='img'
            height='360'
            image={selectedPhoto.src}
            alt='bus stop'
            sx={{ borderRadius: '12px' }}
          />
          <Stack direction='row' sx={{ gap: '12px' }}>
            {testNews.attachments.map(img => (
              <img
                onClick={() => handleSelectPhoto(img)}
                key={img.id}
                src={img.src}
                width={60}
                height={48}
                alt='news'
                style={{
                  borderRadius: '4px',
                  outline: '2px solid transparent',
                  outlineColor:
                    selectedPhoto.id === img.id
                      ? 'var(--color-primary)'
                      : 'transparent',
                  cursor: 'pointer',
                }}
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
          <TextInput
            value={text}
            onChange={handleChangeText}
            placeholder='Текст'
            variant='outlined'
            multiline
            rows={11}>
            {news.text}
          </TextInput>
        </Stack>
        <AppButton
          type='submit'
          sx={{
            p: '12px 32px',
            width: 'fit-content',
          }}>
          Сохранить
        </AppButton>
      </Stack>
    </BaseDrawer>
  );
}
