import { CardMedia } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import TagChip from '../../chips/TagChip';
import BaseDrawer from '../BaseDrawer';

export default function NewsDrawer({ anchor, open, onClose }) {
  return (
    <BaseDrawer anchor={anchor} open={open} onClose={onClose}>
      <h2>Обогреваемые остановки наземного транспорта</h2>
      <Stack>
        <CardMedia />
        <Stack>
          {['a', 'b'].map(img => (
            <CardMedia />
          ))}
        </Stack>
      </Stack>
      <Stack>
        {['a', 'b'].map(img => (
          <TagChip />
        ))}
      </Stack>
      <div>
        За последние 7 лет я создал самый передовой в мире разговорный ИИ с
        открытым доменом для Replika - чат-бота №1 в США с более чем 10
        миллионами пользователей. В начале этого года я покинул Replika, чтобы
        вывести последние достижения в области разговорного ИИ на новый уровень.
        Наше новое приложение Botify позволяет пользователям создавать
        фотореалистичные цифровые персоны для увлекательных бесед. Для каждой
        цифровой персоны можно настроить индивидуальный персонаж и таким образом
        создать уникальную личность любого человека. Хотите поговорить с Маском
        о колонизации Марса? Может быть, вы хотите спросить Иисуса о шумихе
        вокруг NFT? Вы можете сделать все это в Botify.
      </div>
      <h2>Комментарии</h2>
      <Stack>
        {['a', 'b'].map(img => (
          <div>comment</div>
        ))}
      </Stack>
    </BaseDrawer>
  );
}
