import Link from "next/link";
import { IconType } from "react-icons";

interface IComponent{
    item:{
        name:string;
        icon:IconType;
        url:string;
        
    }
}

function IconComponent({item:{name,icon:ICON,url}}:IComponent) {
  return (
    <Link href={url} className="social-link text-light-gray"><ICON /></Link>
  )
}

export default IconComponent