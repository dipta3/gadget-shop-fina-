import { Grid} from '@mui/material'
import Image from "next/image";
import Link from 'next/link';

import logo from "../public/img/logo.png"
const GoHome = () => {
  return (
    
   
       <div style={{textAlign:"center"}}>
        <Link href={"/"}>
        <Image src={logo}
            alt="Home"
            align="center"
            width={200}
            height={100}
            quality={100}  />
        </Link>
       </div>
        
       
       
       
        
      
  
  )
}

export default GoHome