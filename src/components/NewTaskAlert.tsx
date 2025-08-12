import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { useState, useEffect, useRef, type ReactNode, type FormEvent} from "react"; 
import { DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, IconButton, useMediaQuery } from "@mui/material";
import {useTheme} from "@mui/material/styles"; 
import AddIcon from "@mui/icons-material/Add"; 

type NewTaskAlertProps = {
  onAdd: (taskName: string) => void; 
  children: ReactNode; 
}

export default function NewTaskAlert({onAdd, children}: NewTaskAlertProps) {
    const [open, setOpen] = useState(false); 
    const [newTask, setNewTask] = useState(""); 
    const inputRef = useRef<HTMLInputElement>(null); 

    const theme = useTheme(); 
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); 

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

    function handleSubmit(e: FormEvent<HTMLFormElement>) { 
      e.preventDefault(); 
      onAdd(newTask); 
      setNewTask(""); 
      setOpen(false); 
    }


    return (
      <>
        {isSmallScreen ? (
          <IconButton color="primary" onClick={handleOpen}>
            <AddIcon/>
          </IconButton>
        ) : (
        <Button
          variant="contained"
          onClick={handleOpen}
        >
          {children}
        </Button>
        )}
        
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