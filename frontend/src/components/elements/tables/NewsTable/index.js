import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import OptionsMenu from '../../menus/OptionsMenu';
import { getComparator, stableSort } from '../../../../utils/functions';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Stack } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import Chip from '@mui/material/Chip';
import AddSurveyModal from '../../modals/AddSurveyModal';
import EditSurveyModal from '../../modals/EditSurveyModal';

const rows = [
  {
    id: 0,
    categories: [{ name: 'Политика' }, { name: 'Экономика' }],
    title: 'Обогреваемые остановки наземного транспорта',
    text: 'За последние 7 лет я создал самый передовой в мире разговорный ИИ с открытым доменом для Replika - чат-бота №1 в США с более чем 10 миллионами пользователей. В начале этого года я покинул Replika, чтобы вывести последние достижения в области разговорного ИИ на новый уровень. Наше новое приложение Botify позволяет пользователям создавать фотореалистичные цифровые персоны для увлекательных бесед. Для каждой цифровой персоны можно настроить индивидуальный персонаж и таким образом создать уникальную личность любого человека. Хотите поговорить с Маском о колонизации Марса? Может быть, вы хотите спросить Иисуса о шумихе вокруг NFT? Вы можете сделать все это в Botify.',
    commentsAmount: 10,
    likesAmount: 10349,
    date: '23.11.2022',
  },
];

const headCells = [
  {
    id: 'date',
    numeric: false,
    disablePadding: true,
    label: 'Дата создания',
  },
  {
    id: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Заголовок',
  },
  {
    id: 'text',
    numeric: false,
    disablePadding: false,
    label: 'Описание',
  },
  {
    id: 'tags',
    numeric: false,
    disablePadding: false,
    label: 'Теги',
  },
  {
    id: 'attachments',
    numeric: false,
    disablePadding: false,
    label: 'Вложения',
  },
  {
    id: 'comments',
    numeric: false,
    disablePadding: false,
    label: 'Комментарии',
  },
  {
    id: 'likes',
    numeric: false,
    disablePadding: false,
    label: 'Оценили',
  },
  {
    id: 'options',
    numeric: false,
    disablePadding: true,
    label: '',
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <>
      {numSelected > 0 ? (
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...{
              bgcolor: theme =>
                alpha(
                  theme.palette.primary.main,
                  theme.palette.action.activatedOpacity
                ),
            },
          }}>
          <Typography
            sx={{ flex: '1 1 100%' }}
            color='inherit'
            variant='subtitle1'
            component='div'>
            {numSelected} выбрано
          </Typography>

          <Tooltip title='Delete'>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      ) : null}
    </>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function AllRecordBooksTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('subject');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openOptionsMenu = Boolean(anchorEl);
  const [category, setCategory] = React.useState('');

  const [openAddSurveyModal, setOpenAddSurveyModal] = React.useState(false);
  const handleOpenAddSurveyModal = () => setOpenAddSurveyModal(true);
  const handleCloseAddSurveyModal = () => setOpenAddSurveyModal(false);

  const [openEditSurveyModal, setOpenEditSurveyModal] = React.useState(false);
  const handleOpenEditSurveyModal = () => setOpenEditSurveyModal(true);
  const handleCloseEditSurveyModal = () => setOpenEditSurveyModal(false);

  const handleChangeCategory = event => {
    setCategory(event.target.value);
  };

  const handleCloseOptionsMenu = () => {
    setAnchorEl(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelected = rows.map(n => n.date);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, date) => {
    const selectedIndex = selected.indexOf(date);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, date);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = date => selected.indexOf(date) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Paper
          sx={{
            width: '100%',
            mb: 2,
            borderRadius: '12px',
            boxShadow: '0px 4px 20px rgba(83, 83, 83, 0.1)',
          }}>
          <Stack
            direction='row'
            sx={{
              p: '16px',
              gap: '16px',
              alignItems: 'center',
              display: 'grid',
              gridTemplateColumns: '180px 1fr',
            }}>
            <FormControl>
              <InputLabel>Категория</InputLabel>
              <Select
                id='demo-simple-select'
                value={category}
                label='Категория'
                onChange={handleChangeCategory}>
                <MenuItem value={10}>Транспорт</MenuItem>
                <MenuItem value={20}>Общество</MenuItem>
                <MenuItem value={30}>Город</MenuItem>
                <MenuItem value={30}>Образование</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='Поиск'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant='outlined'
            />
          </Stack>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle'>
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.date);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={event => handleClick(event, row.date)}
                        role='checkbox'
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.date}
                        selected={isItemSelected}>
                        <TableCell padding='checkbox'>
                          <Checkbox
                            color='primary'
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component='th'
                          id={labelId}
                          scope='row'
                          padding='none'>
                          {row.date}
                        </TableCell>
                        <TableCell
                          sx={{
                            maxWidth: '150px',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                          }}>
                          {row.title}
                        </TableCell>
                        <TableCell
                          sx={{
                            maxWidth: '200px',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                          }}>
                          {row.text}
                        </TableCell>
                        <TableCell>
                          <div
                            style={{
                              maxWidth: '200px',
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '8px',
                            }}>
                            {row.categories.map(category => (
                              <Chip key={category.name} label={category.name} />
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={e => e.stopPropagation()}
                            href={row.results}
                            download
                            sx={{
                              textTransform: 'none',
                              color: 'var(--color-primary)',
                            }}>
                            6 фото
                          </Button>
                        </TableCell>
                        <TableCell>{row.commentsAmount} комментариев</TableCell>
                        <TableCell>{row.likesAmount} человек</TableCell>
                        <TableCell>
                          <IconButton
                            onClick={e => {
                              e.stopPropagation();
                              setAnchorEl(e.currentTarget);
                            }}>
                            <MoreVertIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
      <OptionsMenu
        anchorEl={anchorEl}
        open={openOptionsMenu}
        handleClose={handleCloseOptionsMenu}
        onEdit={handleOpenEditSurveyModal}
      />
      <AddSurveyModal
        open={openAddSurveyModal}
        onClose={handleCloseAddSurveyModal}
      />
      <EditSurveyModal
        open={openEditSurveyModal}
        onClose={handleCloseEditSurveyModal}
      />
    </>
  );
}
