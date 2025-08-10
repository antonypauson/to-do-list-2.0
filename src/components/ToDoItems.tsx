import  Stack  from "@mui/material/Stack"; 
import Box from "@mui/material/Box"; 
import Item from "./Item";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ToDoItems({tasks}) {
  return (
    <Box sx={{width: '80%', margin: 'auto'}}>
      <Stack direction="column" spacing={2}>
        {tasks.map(eachTask => 
          <Item key={eachTask.id}>{eachTask.name} <EditIcon/> <DeleteIcon/></Item>
        )}
      </Stack>
    </Box>
  )
}
