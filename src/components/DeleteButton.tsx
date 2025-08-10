import { Stack } from "@mui/material"
import {Button} from "@mui/material"

export default function DeleteButton({onDeleteAll}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={onDeleteAll}>Delete All</Button>
    </Stack>
  )
}
