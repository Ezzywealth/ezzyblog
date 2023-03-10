import React from 'react';
import ClientRoute from '../ClientRoute';
import RecentPost from './RecentPost';

type Props = {
	posts: Post[];
};
const RecentPosts = ({ posts }: Props) => {
	return (
		<div>
			<div className='grid gap-4'>
				{posts.map((post) => (
					<ClientRoute key={post._id} route={`posts/${post.slug.current}`}>
						<RecentPost key={post._id} post={post} />
					</ClientRoute>
				))}
			</div>
		</div>
	);
};

export default RecentPosts;
