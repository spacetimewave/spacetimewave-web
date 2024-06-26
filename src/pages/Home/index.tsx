import './index.css'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { useTheme } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'

import SpacetimewaveIcon from '@/components/icons/spacetimewave'
import HorizontalScrolling from '@/components/horizontal-swiper'

import profilePicture from '@/assets/profile.jpg'
import TwitterIcon from '@/components/icons/twitter'
import LinkedinIcon from '@/components/icons/linkedin'
import GithubIcon from '@/components/icons/github'

export default function Home() {
	const { theme } = useTheme()

	return (
		<>
			{/* Navbar */}
			<nav className='flex items-center h-16 box-border p-8 border-b justify-between max-w-full'>
				<Link className='flex items-center gap-2' to='#'>
					<SpacetimewaveIcon />
					<span className='font-light hidden sm:inline'>spacetimewave</span>
				</Link>

				<div className='flex items-center ml-auto'>
					<Button className='mx-1' variant='outline'>
						Log in
					</Button>
					<Button className='mx-1'>Sign in</Button>
					<span className='mx-1'>
						<ModeToggle />
					</span>
				</div>
			</nav>

			{/* Hero Section */}
			<div
				className={`flex flex-col justify-center bg-cover bg-center min-h-[calc(100vh-4rem-1px)] ${theme != 'dark' ? 'bg-light-mode' : 'bg-dark-mode'}`}
			>
				<div className='flex-row grid grid-cols-1 xl:grid-cols-2 items-center p-6'>
					<div className='p-4 text-center xl:text-left mx-auto'>
						<h1 className='text-4xl sm:text-6xl font-bold tracking-tighter mb-4 mx-auto md:mx-0 max-w-sm sm:max-w-lg sm:min-w-[32rem]'>
							We build your dream application.
						</h1>
						<h3 className='text-xl xl:text-2xl mb-6'>
							Empowering businesses through technology.
						</h3>
						<Link
							to='mailto:info@spacetimewave.com'
							style={{ textDecoration: 'none' }}
						>
							<Button>Contact us</Button>
						</Link>
					</div>
				</div>
				<div className='flex-row w-full flex justify-center items-center mt-4'>
					<a href='#services'>
						<div className='w-[35px] h-[64px] rounded-3xl border-4 border-french border-dim flex justify-center items-start p-2 border-black dark:border-white '>
							<motion.div
								animate={{
									y: [0, 24, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: 'loop',
								}}
								className='w-3 h-3 rounded-full bg-black dark:bg-white mb-1'
							/>
						</div>
					</a>
				</div>
			</div>

			{/* Services Section */}
			<span id='services' className='m-1'></span>
			<HorizontalScrolling />

			{/* About Section */}
			<div className='flex flex-col min-h-screen'>
				<main className='flex-1 bg-gray-100 py-12 md:py-24 dark:bg-gray-800'>
					<div className='container space-y-12 px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-2 text-center'>
							<div className='space-y-2'>
								<h1 className='text-4xl font-bold tracking-tighter sm:text-6xl'>
									About Us
								</h1>
								<p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
									We&apos;re on a mission to help teams build, deploy, and scale
									the best web experiences.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-3xl items-start gap-4 lg:max-w-5xl lg:grid-cols-2'>
							<div className='flex flex-col items-center justify-center space-y-2 text-center lg:items-start lg:space-y-4 lg:text-left'>
								<div className='space-y-2'>
									<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-3xl/relaxed lg:text-4xl xl:text-5xl'>
										Our Story
									</h2>
									<p className='max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
										Founded in 2024, our company started as a small team of
										developers with a big idea: to make the web more accessible
										and enjoyable for everyone. Over the years, we&apos;ve grown
										into a global platform that powers millions of websites,
										apps, and e-commerce experiences.
									</p>
								</div>
							</div>
							<div className='flex flex-col items-center justify-center space-y-2 text-center lg:items-start lg:space-y-4 lg:text-left'>
								<div className='space-y-2'>
									<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-3xl/relaxed lg:text-4xl xl:text-5xl'>
										Our Mission
									</h2>
									<p className='max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
										We believe in the power of the web to connect, inspire, and
										transform. Our mission is to empower innovation by providing
										the tools and technologies that enable developers to build
										the future of the internet.
									</p>
								</div>
							</div>
						</div>
						<div className='grid max-w-sm gap-4 mx-auto items-start sm:max-w-4xl sm:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-3'>
							<div className='flex flex-col items-center justify-center space-y-2 text-center'>
								<img
									src={profilePicture}
									width='300'
									height='300'
									alt='Team member'
									className='mx-auto rounded-full overflow-hidden aspect-square object-cover object-center border border-gray-200 dark:border-gray-800 dark:filter dark:brightness-90'
								/>
								<div className='space-y-1'>
									<h3 className='text-xl font-semibold'>
										Javier Hernández Sánchez
									</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										CEO and CTO
									</p>
									<div>
										<Link
											to='https://x.com/javierhersan99/'
											target='_blank'
											rel='noopener noreferrer'
										>
											<TwitterIcon />
										</Link>
										<Link
											to='https://www.linkedin.com/in/javierhersan/'
											target='_blank'
											rel='noopener noreferrer'
										>
											<LinkedinIcon />
										</Link>
										<Link
											to='https://github.com/javierhersan/'
											target='_blank'
											rel='noopener noreferrer'
										>
											<GithubIcon />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='grid max-w-sm gap-4 mx-auto items-start sm:max-w-4xl sm:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-3'>
							<div className='flex flex-col items-start space-y-2'>
								<h3 className='text-xl font-semibold'>Contact Us</h3>
								<address className='text-sm not-italic'>
									C. de Arturo Soria 25, Cdad. Lineal, 28027 Madrid
								</address>
								<a
									href='#'
									className='text-sm underline underline-offset-2 underline-thickness-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
								>
									+34 617 59 33 82
								</a>
								<div className='flex items-center space-x-2 text-sm'>
									<Link
										to='#'
										className='underline underline-offset-2 underline-thickness-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
									>
										info@spacetimewave.com
									</Link>
								</div>
							</div>
						</div>
					</div>
				</main>

				{/* Footer Section */}
				<footer className='border-t border-gray-100 dark:border-gray-800'>
					<div className='container flex items-center justify-between h-16 px-4 md:px-6'>
						<div className='text-sm text-gray-500 dark:text-gray-400'>
							&copy; 2024 <span className='text-base'>spacetimewave</span> Ltd.
							All rights reserved.
						</div>
						<nav className='flex items-center space-x-4'>
							<Link
								to='#'
								className='text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
							>
								Privacy
							</Link>
							<Link
								to='#'
								className='text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
							>
								Terms
							</Link>
						</nav>
					</div>
				</footer>
			</div>
		</>
	)
}
