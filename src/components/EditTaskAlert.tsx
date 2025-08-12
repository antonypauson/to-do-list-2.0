import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { useState, useRef, useEffect} from "react"; 
import type { FormEvent } from "react";
import { DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import type { Task } from "../types";

type EditTaskAlertProps = {
  task: Task; 
  onChange: (task: Task) => void; 
}

export default function EditTaskAlert({task, onChange} : EditTaskAlertProps) {
  
    const [open, setOpen] = useState(false); 
    const [newTask, setNewTask] = useState(task.name); 
    const inputRef = useRef<HTMLInputElement>(null); 

    useEffect(() => {
      if (open) {
        setTimeout(() => {
          inputRef.current?.focus(); 
        }, 0); 
      }
    }, [open])

    function handleOpen() {
        setOpen(true); 
    }

    function handleClose() {
        setOpen(false); 
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) { 
      e.preventDefault(); 
      onChange({...task, name: newTask}); 
      setOpen(false); 
    }


    return (
      <>
        <IconButton
          onClick={handleOpen}
          disableRipple
          disableFocusRipple
          color="primary"
        >
          <EditIcon />
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Editing '{task.name}'</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit your task name</DialogContentText>
            <form onSubmit={handleSubmit} id="task-form">
              <TextField
                value={newTask}
                inputRef={inputRef}
                required
                fullWidth
                variant="standard"
                onChange={(e) => setNewTask(e.target.value)}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button type="submit" form="task-form">
              Edit
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </>
    );
}