import TextField from "@mui/material/TextField";
import Stack  from "@mui/material/Stack";
import Box from "@mui/material/Box"; 
import NewTaskAlert from "./NewTaskAlert";

export default function SearchInput({onAdd, query, onChange, empty}) {
    return (
      <Stack direction="row" spacing={2} sx={{width: '100%', alignItems: 'center'}}>
        {!empty && (
          <Box sx={{flexGrow: 1}}>
            <TextField label="Search a task" variant="outlined" size="small" fullWidth value={query} onChange={e => onChange(e)}/>
          </Box>
        )}
        <NewTaskAlert onAdd={onAdd}>Add New Task</NewTaskAlert>
      </Stack>
    );
}