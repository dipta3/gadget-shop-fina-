import { Grid} from '@mui/material'
import Image from "next/image";
import Link from 'next/link';

import logo from "../public/img/logo.png"
const GoHome = () => {
  return (
    
   
       <div style={{textAlign:"center"}}>
        
        <Link href={"/"} passHref>
               <a><Image src={logo}  width={200}
              height={100} alt="" quality={100} /></a>
              </Link>
       </div>
        
       
       
       
        
      
  
  )
}

export default GoHome