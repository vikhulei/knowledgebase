import { useState } from "react"
import { DektopMenu, MenuItem, SignIn, HamburgerButton, MobileMenu } from "./Nav.styles.js"
import { FaBars } from "react-icons/fa"

function Nav() {

    const MenuItems = [
        { title: "Home", href: "/" },
        { title: "KB1", href: "/" },
        { title: "KB2", href: "/" },
        { title: "KB3", href: "/" },
        { title: "KB4", href: "/" },
        { title: "KB5", href: "/" }
    ]

    const [hambMenu, setHambMenu] = useState(false)

    const clickHambMenu = () => {
        setHambMenu(prev => !prev)
    }

    const clickMobileMenuItem = () => {
        setHambMenu(false)
    }

    return (
        <>
            <DektopMenu>
                {MenuItems.map((value, index) => (
                    <MenuItem key={index} href={value.href}>{value.title}</MenuItem>
                ))}
                <SignIn to="/admin">Sign In</SignIn>
            </DektopMenu>
            <HamburgerButton
                onClick={clickHambMenu}
            >
                <FaBars />
            </HamburgerButton>
            <MobileMenu $hambMenu={hambMenu}>
                {MenuItems.map((value, index) => (
                    <MenuItem
                        key={index}
                        href={value.href}
                        onClick={clickMobileMenuItem}
                    >
                        {value.title}
                    </MenuItem>
                ))}
                <SignIn
                    to="/admin"
                    onClick={clickMobileMenuItem}
                >
                    Sign In
                </SignIn>
            </MobileMenu>
        </>
    )
}

export default Nav