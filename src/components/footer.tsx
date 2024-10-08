import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Home", "About me", "Services"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700" {...({} as any)}>
            <span>Copyright &copy; {CURRENT_YEAR} Naj D.</span>
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                  {...({} as any)}
                >
                  {link}
                </Typography>
              </li>
            ))}
            <Button color="gray" {...({} as any)}>
              <a
                href="https://www.linkedin.com/in/naj-dbi/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-white"
              >
                Connect
              </a>
            </Button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
