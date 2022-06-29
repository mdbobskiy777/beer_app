import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import styles from './styles';

type SortSelectProps = {
  sortBy: string;
  handleChangeSort: (event: any) => void;
};

export const SortSelect = ({ sortBy, handleChangeSort }: SortSelectProps) => (
  <Box sx={styles.sortSelectBox}>
    <FormControl sx={styles.formControl}>
      <InputLabel id="select-label">sort</InputLabel>
      <Select labelId="select-label" value={sortBy} label="sort" onChange={handleChangeSort}>
        <MenuItem value="abv_ascending">abv ascending</MenuItem>
        <MenuItem value="abv_descending">abv descending</MenuItem>
        <MenuItem value="name_ascending">name ascending</MenuItem>
        <MenuItem value="name_descending">name descending</MenuItem>
      </Select>
    </FormControl>
  </Box>
);
