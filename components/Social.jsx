import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/harryhung195?tab=repositories"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/van-hung-hoang-668049125"},
    {icon: <FaYoutube/>, path: "https://www.youtube.com/channel/UCpMVSxeP6b12-HcMBxL5Row"},
    {icon: <FaTwitter/>, path: "https://twitter.com/hungharry123"},
]




const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>

   {socials.map((item, index)=> {
    return <Link key={index} href={item.path} className={iconStyles}>
 {item.icon}
    </Link>
   })}
    </div>
  
}

export default Social
