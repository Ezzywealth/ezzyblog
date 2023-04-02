import Header from '@/components/Header/Header';
import '../../styles/globals.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import FooterSection from '@/components/Footer/Footer';

export const metadata = {
	title: 'Home',
};
export const revalidate = 60;
const query = groq`
*[_type=='post'][0...3]{
	...,
	author->,
	categories[]->,
} | order(_createdAt desc)
`;
export default async function RootLayout({ children }: { children: React.ReactNode }) {
	// fetch data from studio
	const posts = await client.fetch(query);

	return (
		<html lang='en'>
			<body className='mx-auto theme-dark bg-skin-bgDark'>
				<section className='bg-skin-bgDark'>
					<Header />
					<main className=' grid lg:grid-cols-9 w-full px-4 md:px-16  md:py-16 pb-20 mt-[150px] md:mt-[200px]'>
						<section className='lg:col-span-6  lg:pl-10'>
							<section>{children}</section>
						</section>
						<section className='lg:col-span-3  lg:pl-10 '>
							<Sidebar posts={posts} />
						</section>
					</main>
					<FooterSection />
				</section>
			</body>
		</html>
	);
}
