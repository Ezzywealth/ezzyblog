import Header from '@/components/Header/Header';
import '../../styles/globals.css';

export const metadata = {
	title: 'Ezzy Blog',
	description: 'Generated by Next.js',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='mx-auto'>
				<Header />
				<main className='grid grid-cols-8 w-full'>
					<section className='col-span-6'>{children}</section>
					<section className='col-span-2 border-l border-solid height-screen border-pink-500'>
						side articles
					</section>
				</main>
			</body>
		</html>
	);
}
