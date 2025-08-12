import { Container, Box } from "@mui/material";
import { type ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode; 
}

export default function PageLayout({children}: PageLayoutProps) {
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