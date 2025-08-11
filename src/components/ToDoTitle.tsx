import { Typography } from "@mui/material"; 


export default function ToDoTitle() {
    return (
       <Typography
       variant="h3"
       component="h1"
       sx={{
        textTransform: 'uppercase', 
        fontWeight: 'bold', 
        my: 4, 
        color: 'primary.main'
       }}>
        2 Do List
       </Typography>
    )
}