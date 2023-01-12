import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://i.yapx.cc/PdTRP.jpg" alt="" />
			{props.message}
			<div>
				<span>Like</span> {props.likesCounts}
			</div>
		</div>
	)
}

export default Post;