import { makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { useAppContext } from "../../providers";

const useStyles = makeStyles(() => ({
  input: {
    width: 400,
    backgroundColor: "white",
  },
}));

export function Search() {
  const classes = useStyles();
  const { popular, setFilteredPopular } = useAppContext();
  return (
    <Autocomplete
      fullWidth={false}
      freeSolo
      id='search-input'
      disableClearable
      options={popular.map((item) => item.title)}
      filterOptions={() => []}
      onInputChange={(e, value: string) => {
        setFilteredPopular(
          popular.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
          )
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            className={classes.input}
            size='small'
            label='Search for...'
            margin='normal'
            variant='outlined'
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        );
      }}
    />
  );
}
