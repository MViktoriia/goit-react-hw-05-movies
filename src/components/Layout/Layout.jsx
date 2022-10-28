import AppBar from "components/AppBar.jsx/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";

export default function Layout() {
    return (
        <Container>
            <AppBar />
            <Suspense fallbeck={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>                        
        </Container>    
    )
};
