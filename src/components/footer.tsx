import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Home", "About me",  "Services"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
          Copyright &copy; {CURRENT_YEAR} {" "}
         {" "}
          Naj D.
            
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((Link) => (
              <li key={Link}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {Link}
                </Typography>
              </li>
            ))}
            <Button color="gray">
              
            <a href="https://www.linkedin.com/in/naj-dbi/" target="_blank">
              
            Connect</a></Button>
          </ul>

          
        </div>
      </div>
    </footer>
  );
}
export default Footer;
