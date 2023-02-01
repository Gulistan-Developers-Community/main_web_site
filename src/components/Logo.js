import Image from 'next/image';
import LogoImage from '../public/images/logo.png';

export default function Logo(){
    return(
        <>
           <div className="mx-auto max-w-7xl px-1 py-1">
           <div className="flex justify-start">
            <a href="/">
            <Image width={50} height={50} src={LogoImage} alt="logo" />
            </a>
          </div>
          </div>
        </>
    )
}