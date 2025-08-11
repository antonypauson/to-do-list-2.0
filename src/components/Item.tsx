import Paper from "@mui/material/Paper";


export default function Item({children}){
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
