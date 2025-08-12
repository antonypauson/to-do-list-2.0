import Paper from "@mui/material/Paper";
import type { ReactNode } from "react";

type ItemProps = {
  children: ReactNode; 
}

export default function Item({children}: ItemProps){
  return (
    <Paper sx={{
      display: 'flex', 
      alignItems: 'center', 
      transition: 'background-color 0.3s', 
      '&:hover': {
        backgroundColor: "action.hover", 
      }}} elevation={2}>
      {children}
    </Paper>
  )
}
