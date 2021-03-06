import { CompletedChallenges } from '../components/CompletedChallenges/CompletedChallenges';
import { Countdown } from '../components/Countdown/Countdown';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox/ChallengeBox';
import { Profile } from '../components/Profile/Profile';
import styles from './../styles/Home.module.sass';

import Head from 'next/head';

export default function Home() {
	return (
		<div className={styles['container']}>
			<Head>
				<title>Home | move.it</title>
			</Head>

			<ExperienceBar />

			<section>
				<div>
					<Profile />

					<CompletedChallenges />

					<Countdown />
				</div>

				<div>
					<ChallengeBox />
				</div>
			</section>
		</div>
	);
}
