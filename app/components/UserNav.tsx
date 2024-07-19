import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const UserNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="w-fit h-fit p-3">
                    <Menu />
                </button>
            </SheetTrigger>
            <SheetContent className="bg-black">
                <SheetHeader>
                <button>
                        Book a call
                    </button>
                </SheetHeader>
                <ul className='grid gap-4 py-4 text-[#E4E6F2]'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Process</li>
                    <li>Work</li>
                    <li>Pricing</li>
                    <li>FAQs</li>
                </ul>
            </SheetContent>
        </Sheet>
    )
}
export default UserNav;
