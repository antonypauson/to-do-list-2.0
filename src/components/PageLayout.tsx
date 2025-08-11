import { Container, Box } from "@mui/material";
export default function PageLayout({children}) {
    return (
      <Container maxWidth="md">
        <Box sx={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 4, 
          mt: 4, 
        }}>{children}</Box>
      </Container>
    );
}