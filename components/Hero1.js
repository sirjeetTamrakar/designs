import React from 'react'
import styles from "../styles/Hero1.module.css";
import Image from "next/image";

const Hero1 = () => {
    return (
			<div className={styles.main}>
				<div className={styles.left}>
					<p>Short Film</p>
					<div className={styles.line} />
				</div>
				<div className={styles.image}>
					<Image
						className={styles.img}
						src='/2.png'
						height={650}
					width={850}
						alt='asd'
					/>
				</div>
				<div className={styles.left}></div>
				<div className={styles.bottom}>
					<div />
				<div className={styles.texts}>
						<div className={styles.text}>
							<h3>Photography</h3>
							<small>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</small>
						</div>
						<div className={styles.text}>
							<h3>Photography</h3>
							<small>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</small>
						</div>
						<div className={styles.text}>
							<h3>Photography</h3>
							<small>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</small>
						</div>
					</div>
					<div />
				</div>
			</div>
		);
}

export default Hero1
