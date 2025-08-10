import { Container } from "@mui/material";
export default function PageLayout({children}) {
    return (
      <Container className="flex flex-col items-center gap-5">{children}</Container>
    );
}