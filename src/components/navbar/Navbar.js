import React from 'react'
import { Navbar, Button, Link, Text } from "@nextui-org/react";

export default function () {

    const collapseItems = [
        "Features",
        "Customers",
        "Pricing",
        "Company",
        "Legal",
        "Team",
        "Help & Feedback",
        "Login",
        "Sign Up",
    ];



    return (
        <div>
            <Navbar isBordered maxWidth="fluid" variant="sticky">
                <Navbar.Brand>
                    <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />

                    <Text b color="inherit" hideIn="xs">
                        ACME
                    </Text>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                    <Navbar.Link href="#">Features</Navbar.Link>
                    <Navbar.Link href="#">Customers</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>



                </Navbar.Content>
                <Navbar.Collapse>
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem key={item}>
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href="#"
                            >
                                {item}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>


        </div>
    )
}
