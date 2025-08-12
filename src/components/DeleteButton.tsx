import { Stack } from "@mui/material"
import {Button} from "@mui/material"

type DeleteButtonProps = {
  onDeleteAll: () => void; 
  empty: boolean; 
}

export default function DeleteButton({onDeleteAll, empty} : DeleteButtonProps) {
  return (
    <Stack direction="row" spacing={2}>
      {!empty &&
        (<Button variant="contained" onClick={onDeleteAll} color="error">
          Delete All
        </Button>)
      }
    </Stack>
  );
}
