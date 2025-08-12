import TextField from "@mui/material/TextField";
import Stack  from "@mui/material/Stack";
import Box from "@mui/material/Box"; 
import NewTaskAlert from "./NewTaskAlert";
import type { ChangeEvent } from "react";

type SearchInputProps = {
  onAdd: (taskName: string) => void; 
  query: string; 
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; 
  empty: boolean; 
}

export default function SearchInput({onAdd, query, onChange, empty} : SearchInputProps) {
    return (
      <Stack direction="row" spacing={2} sx={{width: '100%', alignItems: 'center'}}>
        {!empty && (
          <Box sx={{flexGrow: 1}}>
            <TextField label="Search a task" variant="outlined" size="small" fullWidth value={query} onChange={onChange}/>
          </Box>
        )}
        <NewTaskAlert onAdd={onAdd}>Add New Task</NewTaskAlert>
      </Stack>
    );
}