import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { useState } from "react"; 
import { DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function EditTaskAlert({task, onChange}) {
    const [open, setOpen] = useState(false); 
    const [newTask, setNewTask] = useState(task.name); 


    function handleOpen() {
        setOpen(true); 
    }

    function handleClose() {
        setOpen(false); 
    }

    function handleSubmit(e) { 
      e.preventDefault(); 
      onChange({...task, name: newTask}); 
      setOpen(false); 
    }


    return (
      <>
        <Button variant="outlined" onClick={handleOpen}><EditIcon/></Button>
        <Dialog 
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>
            
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your new task name
            </DialogContentText>
            <form onSubmit={handleSubmit} id="task-form">
              <TextField
                value={newTask} 
                required
                fullWidth
                variant="standard"
                onChange={e => setNewTask(e.target.value)}/>
            </form>
          </DialogContent>
          <DialogActions>
            <Button type="submit" form="task-form">Edit</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>

        </Dialog>
      </>
    );
}