import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import Navbar from './Navbar'

const Hero = () => {
    return (
			<div className={styles.main}>
				<div className={styles.image}>
					<div className={styles.blur}>
						<Navbar />
						<div className={styles.text}>
							<b>Fly the friendly skies with Emirates</b>
							<small>Where Your Journey Begins.</small>
							<button data-aos-delay='3000' data-aos='zoom-out-up'>
								Explore Now
							</button>
						</div>
					</div>
					<Image
						className={styles.img}
						src='/7.jpg'
					layout='fill'
					blurDataURL='data:...'
					placeholder='blur'
						objectFit='cover'
						alt='asd'
					/>
				</div>
			</div>
		);
}

export default Hero
