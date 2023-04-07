import Image from "next/image";
import menu from "@/public/icons/menu.svg";
import { useState } from "react";
import menuBackground from '@/public/icons/menu-background.svg'
import styles from "@/components/Hamburger/Hamburger.module.css";

export default function Menu() {
    const [isActive, setIsActive] = useState(false);
    console.log(isActive);

    if (isActive == true) {
        return (
            <>
                <div className={styles.menu}>
                    <div className={styles.wrap}>
                        <Image src={menuBackground} className={styles.menubackground} />

                        <div className={styles.text_wrap}>
                            <div className={styles.exit}>
                                <h1
                                    className={styles.exit_text}
                                    onClick={() => setIsActive(!isActive)}>
                                    x</h1>
                            </div>
                            <div className={styles.menu_text}>
                                <ul className={styles.list}>
                                    <a href="http://localhost:3000/">
                                        <li className={styles.text_link} >home</li>
                                    </a>
                                    <a href="http://localhost:3000/contact">
                                        <li className={styles.text_link} >lesson1</li>
                                    </a>
                                    <a href="http://localhost:3000/contact">
                                        <li className={styles.text_link} >lesson 2</li>
                                    </a>
                                    <a href="http://localhost:3000/contact">
                                        <li className={styles.text_link} >lesson 3</li>
                                    </a>
                                    <a href="http://localhost:3000/contact">
                                        <li className={styles.text_link} >lesson 4</li>
                                    </a>
                                    <a href="http://localhost:3000/contact">
                                        <li className={styles.text_link} >know your rights</li>

                                    </a>
                                    <a href="http://localhost:3000/contact">
                                        <li className={styles.text_link} >resources</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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