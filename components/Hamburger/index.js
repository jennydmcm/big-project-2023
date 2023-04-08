import Image from "next/image";
import menu from "@/public/icons/menu.svg";
import { useState } from "react";
import styles from "@/components/Hamburger/Hamburger.module.css";

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
                                    <a href="http://localhost:3000/"
                                        className={styles.text_link} >home
                                    </a>
                                    <a href="http://localhost:3000/contact"
                                        className={styles.text_link} >lesson 1
                                    </a>
                                    <a href="http://localhost:3000/contact"
                                        className={styles.text_link} >lesson 2
                                    </a>
                                    <a href="http://localhost:3000/contact"
                                        className={styles.text_link} >lesson 3
                                    </a>
                                    <a href="http://localhost:3000/contact"
                                        className={styles.text_link} >lesson 4
                                    </a>
                                    <a href="http://localhost:3000/contact"
                                        className={styles.text_link}> know your rights

                                    </a>
                                    <a href="http://localhost:3000/contact"
                                        className={styles.text_link}> resources
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