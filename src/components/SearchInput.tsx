import TextField from "@mui/material/TextField";
import Stack  from "@mui/material/Stack";
// import Button  from "@mui/material/Button";
import NewTaskAlert from "./NewTaskAlert";
export default function SearchInput({onAdd}) {
    return (
      <Stack direction="row" gap={5} >
        <TextField label="Search a task" variant="outlined" size="small" id="fullWidth">
          HI SearchINput
        </TextField>
        <NewTaskAlert onAdd={onAdd}>Add New Task</NewTaskAlert>
      </Stack>
    );
}