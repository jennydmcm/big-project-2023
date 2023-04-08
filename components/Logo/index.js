import { useState } from "react"
import Image from "next/image"
import Logo from '@/public/icons/logo.svg'


export default function Logomark() {
    return (

        <Image src={Logo}
            width={173}
            height={60}
        />

    )
};