import TextField from "@mui/material/TextField";
import Stack  from "@mui/material/Stack";
import Button  from "@mui/material/Button";
export default function SearchInput() {
    return (
      <Stack direction="row" gap={5}>
        <TextField label="Search a task" variant="outlined" id="fullWidth">
          HI SearchINput
        </TextField>
        <Button variant="contained">Add New Task</Button>
      </Stack>
    );
}