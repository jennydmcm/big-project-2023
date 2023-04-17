import Image from "next/image";
import menu from "@/public/icons/menu.svg";
import { useState } from "react";
import styles from "@/components/Hamburger/Hamburger.module.css";
import home from '@/public/icons/home.svg'
import pill from '@/public/icons/pills.svg'
import eye from '@/public/icons/eye.svg'
import spray from '@/public/icons/spray 2.svg'
import injection from '@/public/icons/syringe.svg'
import rights from '@/public/icons/rights.svg'
import resources from '@/public/icons/resources.svg'


export default function Menu() {
    const [isActive, setIsActive] = useState(false);
    console.log(isActive);

    if (isActive == true) {
        return (
            <>

                <div className={styles.menu}>
                    <div className={styles.wrap}>
                        <div className={styles.text_wrap}>
                            <div className={styles.menu_text}>
                                <div className={styles.exit}>
                                    <h1
                                        className={styles.exit_text}
                                        onClick={() => setIsActive(!isActive)}>
                                        x</h1>
                                </div>
                                <ul className={styles.list}>
                                    <a href="/"
                                        className={styles.text_link} >
                                        <Image src={home} className={styles.img_link} />home
                                    </a>
                                    <a href="/lessonOne"
                                        className={styles.text_link} >
                                        <Image src={pill} className={styles.img_link} />lesson 1
                                    </a>
                                    <a href="/lessonTwo"
                                        className={styles.text_link} >
                                        <Image src={eye} className={styles.img_link} />lesson 2
                                    </a>
                                    <a href="/lessonThree"
                                        className={styles.text_link} >
                                        <Image src={spray} className={styles.img_link} />lesson 3
                                    </a>
                                    <a href="/lessonFour"
                                        className={styles.text_link} >
                                        <Image src={injection} className={styles.img_link} />lesson 4
                                    </a>
                                    <a href="/knowyourrights"
                                        className={styles.text_link}>
                                        <Image src={rights} className={styles.img_link} />know your rights

                                    </a>
                                    <a href="/resources"
                                        className={styles.text_link}>
                                        <Image src={resources} className={styles.img_link} />resources
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
                <Image className={styles.activemenu}
                    src={menu}
                    width={43} />


            </>
        );
    } else {
        return (
            <>
                <Image className={styles.menu}
                    src={menu}
                    onClick={() => setIsActive(!isActive)}
                />
            </>
        );
    }
}