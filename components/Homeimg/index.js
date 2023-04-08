import Image from "next/image"
import HeroImg from '@/public/heroimg.svg'


export default function Homeheroimg() {
    return (

        <Image src={HeroImg}
            width={414}
        />

    )
};