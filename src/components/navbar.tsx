import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const NAV_MENU = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#test" },
  { label: "Education and Experiences", href: "#edu" },
  { label: "Skills and Languages", href: "#sk" },
];

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        variant="paragraph"
        color="black"
        className="flex items-center gap-2 font-medium text-gray-900"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder=""
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MTNavbar
      fullWidth
      blurred={false}
      shadow={false}
      color="white"
      className="sticky top-0 z-50 border-0"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      placeholder=""
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          target="_blank"
          color="blue-gray"
          className="text-lg font-bold"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder=""
        >
          Welcome!
        </Typography>

        {/* Desktop Nav Menu */}
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((nav) => (
            <NavItem key={nav.label} href={nav.href}>
              {nav.label}
            </NavItem>
          ))}
        </ul>

        <div id="nav" className="hidden items-center gap-2 lg:flex">
          <a href="https://www.linkedin.com/in/naj-dbi/" target="_blank">
            <Button
              color="gray"
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              placeholder=""
            >
              Connect
            </Button>
          </a>
        </div>

        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder=""
        >
          {open ? <XMarkIcon strokeWidth={2} className="h-6 w-6" /> : <Bars3Icon strokeWidth={2} className="h-6 w-6" />}
        </IconButton>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((nav) => (
              <NavItem key={nav.label} href={nav.href}>
                {nav.label}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <a href="https://www.linkedin.com/in/naj-dbi/" target="_blank">
              <Button
                color="gray"
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                placeholder=""
              >
                Connect to LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
