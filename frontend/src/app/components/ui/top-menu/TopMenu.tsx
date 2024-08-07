import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });


export const TopMenu = () => {
    return (
        <nav className="flex px-5 justify-between items-center w-full" > 
        {/* LOGO */}
        <div>
            
                    <span className={ '${ manrope.classname } antialiased font-bold'}>biifco</span>
          
        </div>
        
        </nav>
    )
}