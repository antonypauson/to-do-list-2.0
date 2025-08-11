import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { useState, useEffect, useRef } from "react"; 
import { DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

export default function NewTaskAlert({onAdd, children}) {
    const [open, setOpen] = useState(false); 
    const [newTask, setNewTask] = useState(""); 
    const inputRef = useRef(null); 

    useEffect(() => {
      if (open) {
        setTimeout(() => {
          inputRef.current?.focus(); 
        }, 0); 
      }
    }, [open]); 

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
        <Button
          variant="contained"
          onClick={handleOpen}
          disableRipple
          disableFocusRipple
        >
          {children}
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Adding new task</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter your new task name</DialogContentText>
            <form onSubmit={handleSubmit} id="task-form">
              <TextField
              inputRef={inputRef}
                value={newTask}
                required
                fullWidth
                variant="standard"
                onChange={(e) => setNewTask(e.target.value)}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button type="submit" form="task-form">
              Add
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </>
    );
}