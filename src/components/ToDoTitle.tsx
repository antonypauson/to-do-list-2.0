import { Typography } from "@mui/material"; 


export default function ToDoTitle() {
    return (
       <Typography
       variant="h3"
       component="h1"
       sx={{
        textTransform: 'uppercase', 
        fontWeight: 'bold', 
        color: 'primary.main', 
        fontSize: {
            xs: "1.75rem", 
            sm: "2.25rem", 
            md: "3rem", 
        }, 
        my: {
            xs: 2, 
            sm: 3, 
            md: 4, 
        }
       }}>
        2 Do List
       </Typography>
    )
}