import Image from 'next/image';

import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image
                    src="/images/site/toni.png"
                    alt="An image showing Toni"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I&apos;m Toni</h1>
            <p>
                I blog about web development - especially frontend frameworks
                like React.js and Next.js
            </p>
        </section>
    );
};

export default Hero;
