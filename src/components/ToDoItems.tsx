import  Stack  from "@mui/material/Stack"; 
import Box from "@mui/material/Box"; 
import Item from "./Item";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox, Alert, Typography, IconButton } from "@mui/material";
import EditTaskAlert from "./EditTaskAlert";
import type { Task } from "../types";

type ToDoItemsProps = {
  tasks: Task[]; 
  empty: boolean; 
  onChange: (task: Task) => void; 
  onDelete: (id: number) => void; 
}

export default function ToDoItems({tasks, empty, onChange, onDelete}: ToDoItemsProps) {
  const copyTasks = [...tasks]; 
  copyTasks.sort((a,b) => {
    if (a.done === b.done) return 0; 
    if (!a.done && b.done) return -1; 
    return 1; 
  })
  
  if (empty) {
    return (
      <Box sx={{ width: "100%"}}>
        <Alert variant="outlined" severity="error" sx={{width: '100%'}}>
          No Tasks for you now
        </Alert>
      </Box>
    );
  }
  return (
    <Box sx={{ width: "100%"}}>
      <Stack direction="column" spacing={2}>
        {copyTasks.map((eachTask) => (
          <Item key={eachTask.id} >
            <Checkbox
              color="success"
              checked={eachTask.done}
              onChange={(e) =>
                onChange({ ...eachTask, done: e.target.checked })
              }
            />
            <Typography 
            sx={{
              flexGrow: 1, 
              textDecoration: eachTask.done ? "line-through" : "none", 
              color: eachTask.done ? "text.disabled" : "text.primary", 
            }}>
              {eachTask.name}
            </Typography>
            <EditTaskAlert task={eachTask} onChange={onChange} />
            <IconButton
              onClick={() => onDelete(eachTask.id)}
              color="error"
            >
              <DeleteIcon/>
            </IconButton>
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
