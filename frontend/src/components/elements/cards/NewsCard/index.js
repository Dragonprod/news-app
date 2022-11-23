import { Button, Paper, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import AppButton from '../../buttons/AppButton';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TagChip from '../../chips/TagChip';
import { MainContext } from '../../../../context/MainContextProvider';

const Title = styled(Typography)({
  fontFamily: 'inherit',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#25222C',
});

const Text = styled(Typography)({
  maxWidth: '60%',
  fontFamily: 'inherit',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '16px',
  color: '#25222C',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
});

export default function NewsCard({ news }) {
  const { isNewsDrawerOpen, setIsNewsDrawerOpen } = useContext(MainContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => setIsLiked(prev => !prev);

  return (
    <Paper elevation={0} sx={{ borderRadius: '16px' }}>
      <Stack direction='row' sx={{ gap: '12px', m: 2 }}>
        {news.categories.map(category => (
          <TagChip key={category.name} label={category.name} />
        ))}
      </Stack>
      <Stack sx={{ gap: '24px', margin: '0 16px 24px' }}>
        <Title>{news.title}</Title>
        <Text>{news.text}</Text>
      </Stack>
      <Stack direction='row' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' sx={{ gap: '24px', m: 2 }}>
          <Stack direction='row' alignItems='center' sx={{ gap: '12px' }}>
            <ChatBubbleOutlineIcon />
            {news.commentsAmount}
          </Stack>
          <Stack direction='row' alignItems='center' sx={{ gap: '12px' }}>
            <FavoriteBorderIcon />
            {news.likesAmount}
          </Stack>
          <Stack direction='row' alignItems='center' sx={{ gap: '12px' }}>
            {news.date}
          </Stack>
        </Stack>
        <Stack direction='row' alignItems='center' sx={{ gap: '24px' }}>
          <Button
            onClick={handleLike}
            startIcon={isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            sx={{
              color: 'var(--color-primary)',
              textTransform: 'none',
              fontFamily: 'inherit',
            }}>
            Оценить
          </Button>
          <AppButton
            sx={{ borderRadius: '16px 0', p: 2 }}
            onClick={() => setIsNewsDrawerOpen(true)}>
            Подробнее
          </AppButton>
        </Stack>
      </Stack>
    </Paper>
  );
}
