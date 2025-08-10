import  Stack  from "@mui/material/Stack"; 
import Box from "@mui/material/Box"; 
import Item from "./Item";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Checkbox, Alert } from "@mui/material";

export default function ToDoItems({tasks, empty, onChange}) {
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
        {tasks.map((eachTask) => (
          <Item key={eachTask.id}>
            <Checkbox color="success" checked={eachTask.done} onChange={(e) => onChange({...eachTask, done: e.target.checked})}/>
            {eachTask.name}
            <Button startIcon={<EditIcon />} />
            <Button startIcon={<DeleteIcon />} />
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
