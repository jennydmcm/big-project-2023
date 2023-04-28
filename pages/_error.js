import styles from 'styles/Error.module.css'
import Image from 'next/image'
import error from 'public/error.svg'

function Error({ statusCode }) {
    return (
        <main className={styles.main}>
            <Image className={styles.image} src={error}></Image>
            <p className={styles.text}>
                {
                    statusCode ? `Oops! This page is unavailable. ${statusCode} has occured.`
                        : 'Oops! This page is unavailable. An error occured on client.'
                }
            </p>
        </main>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode
        : err ?
            err.statusCode
            : 404
    return { statusCode }

}

export default Error;

