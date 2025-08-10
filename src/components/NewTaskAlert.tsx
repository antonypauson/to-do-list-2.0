import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { useState } from "react"; 
import { DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

export default function NewTaskAlert({onAdd, children}) {
    const [open, setOpen] = useState(false); 
    const [newTask, setNewTask] = useState(""); 


    function handleOpen() {
        setOpen(true); 
    }

    function handleClose() {
        setOpen(false); 
    }

    function handleSubmit(e) { 
      e.preventDefault(); 
      onAdd(newTask); 
      setNewTask(""); 
      setOpen(false); 
    }


    return (
      <>
        <Button variant="contained" onClick={handleOpen}>{children}</Button>
        <Dialog 
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>
            Adding new task 
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your new task name
            </DialogContentText>
            <form onSubmit={handleSubmit} id="task-form">
              <TextField
                value={newTask} 
                autoFocus
                required
                fullWidth
                variant="standard"
                onChange={e => setNewTask(e.target.value)}/>
            </form>
          </DialogContent>
          <DialogActions>
            <Button type="submit" form="task-form">Add</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>

        </Dialog>
      </>
    );
}