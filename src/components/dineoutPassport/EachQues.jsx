import React, { useState } from 'react'

import styles from "./getToKnow.module.css";

export const EachQues = ({que, ans }) => {
    const [isClicked, setIsClicked] = useState(false);
	const handleQues = () => {
		setIsClicked(!isClicked);
	};
  return (
		<div>
			<div className={styles.wDineOutQue}>
				<div className={styles.wDineOutQue_}>
					{que}
				</div>
				<button onClick={handleQues} className={styles.WDineOutBtn}>
					^
				</button>
			</div>
			<div>
				{isClicked && (
					<div className={styles.ans}>
						{ans}
					</div>
				)}
			</div>

			<div className={styles.addingBorder}></div>
		</div>
  );
}
