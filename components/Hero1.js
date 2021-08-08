import React, {useState} from 'react'
import styles from "../styles/Hero1.module.css";
import Image from "next/image";
import { spidermans } from './Data';

const Hero1 = () => {
	const [index, setIndex] = useState(0)
	const {id, title, imageURL } = spidermans[index]
	console.log(index)

	const check = (number) =>
	{
		if (number > spidermans.length - 1)
		{
			return 0
		}
		if (number < 0)
		{
			return spidermans.length-1
		}
		return number
	}
	const next = () =>
	{
		setIndex((index) =>
		{
			let newIndex = index + 1
			return check(newIndex)
		})
	}

	const prev = () => {
		setIndex(index => {
			let newIndex = index - 1;
			return check(newIndex);
		});
	};
    return (
			<div className={styles.main}>
				<div className={styles.left}>
					<p>Short Film</p>
					<div className={styles.line} />
				</div>
				<div className={styles.image}>
					<Image
						className={styles.img}
						src={imageURL}
						height={500}
					width={500}
					objectFit='cover'
						alt='asd'
					/>
				</div>
				<div className={styles.right}>
					<div className={styles.buttons}>
						<span className='material-icons' onClick={next}>arrow_forward_ios</span>
						<span className='material-icons' onClick={prev}>arrow_back_ios</span>
					</div>
				</div>
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
