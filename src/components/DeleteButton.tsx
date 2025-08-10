import { Stack } from "@mui/material"
import {Button} from "@mui/material"

export default function FooterButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Delete All</Button>
    </Stack>
  )
}
