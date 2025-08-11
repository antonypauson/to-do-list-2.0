import  Stack  from "@mui/material/Stack"; 
import Box from "@mui/material/Box"; 
import Item from "./Item";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Checkbox, Alert } from "@mui/material";
import EditTaskAlert from "./EditTaskAlert";

export default function ToDoItems({tasks, empty, onChange, onDelete}) {
  const copyTasks = [...tasks]; 
  copyTasks.sort((a,b) => {
    if (a.done === b.done) return 0; 
    if (!a.done && b.done) return -1; 
    return 1; 
  })
  
  if (empty) {
    return (
      <Box sx={{ width: "80%", margin: "auto" }}>
        <Alert variant="outlined" severity="error">
          No Tasks for you now
        </Alert>
      </Box>
    );
  }
  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
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
            <p className={`${eachTask.done ? "line-through" : ""}`} style={{flexGrow: 1}}>{eachTask.name}</p>
            <EditTaskAlert task={eachTask} onChange={onChange} />
            <Button
              startIcon={<DeleteIcon />}
              onClick={() => onDelete(eachTask.id)}
            />
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
