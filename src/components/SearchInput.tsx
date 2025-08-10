import TextField from "@mui/material/TextField";
import Stack  from "@mui/material/Stack";
// import Button  from "@mui/material/Button";
import NewTaskAlert from "./NewTaskAlert";
export default function SearchInput({onAdd, query, onChange}) {
    return (
      <Stack direction="row" gap={5} >
        <TextField label="Search a task" variant="outlined" size="small" id="fullWidth" value={query} onChange={e => onChange(e)}>
          HI SearchINput
        </TextField>
        <NewTaskAlert onAdd={onAdd}>Add New Task</NewTaskAlert>
      </Stack>
    );
}