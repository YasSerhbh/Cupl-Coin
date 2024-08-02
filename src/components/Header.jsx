/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NXjPbYY7mb8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

export default function Header() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center bg-c-back2
        px-4 max-sm:px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32
    ">
      <a href="#" className="flex items-center gap-2" >
        <span className="text-4xl font-bold font-c-primary text-white tracking-tight">$CUPL</span>
      </a>
      <nav className="ml-auto hidden gap-6 lg:flex">
        <a href="#about" className="text-lg menu__link text-white font-medium transition-colors" >
          About
        </a>
        <a href="#join-us" className="text-lg menu__link text-white font-medium transition-colors" >
          Join Us
        </a>
        {/* <a href="#contact" className="text-lg menu__link text-white font-medium transition-colors" >
          Contact
        </a> */}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="ml-auto bg-c-back1 border-2 border-white hover:bg-c-back1 lg:hidden">
            <MenuIcon className="h-6 w-6 text-white" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-c-back1">
          <div className="grid gap-6 p-6 bg-c-back1">
                <a
                    href="#about"
                    className="flex items-center gap-2 text-lg font-medium menu__link text-white transition-colors"
                    
                    >
                    About
                </a>
                <a
                    href="#join-us"
                    className="flex items-center gap-2 text-lg font-medium menu__link text-white transition-colors"
                    
                    >
                    Join Us
                </a>
          </div>
        </SheetContent>
      </Sheet>

      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="ml-auto bg-c-back1 border-2 border-white hover:bg-c-back1 lg:hidden">
            <MenuIcon className="h-6 w-6 text-white" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuGroup>
            <DropdownMenuItem>
            <a
                    href="#about"
                    className=""
                    
                    >
                    About
                </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <a
                    href="#about"
                    className=""
                    
                    >
                    Join us
                </a>
            </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}