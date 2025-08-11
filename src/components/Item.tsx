import Paper from "@mui/material/Paper";


export default function Item({children}){
  return (
    <Paper sx={{display: 'flex', alignItems: 'center'}}>
      {children}
    </Paper>
  )
}
