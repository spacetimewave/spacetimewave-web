import './index.css'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useTheme } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'

import Icon from '@/components/icon'
import HorizontalScrolling from '@/components/horizontal-swiper'

export default function Home() {
	const { theme } = useTheme()
	useEffect(() => {
		console.log(theme)
	}, [theme])

	return (
		<>
			<header className='flex items-center h-16 p-8 border-b'>
				<Link className='flex items-center gap-2 mr-4' to='#'>
					<Icon />
					<span className='font-light'>spacetimewave</span>
				</Link>
				<nav className='hidden md:flex items-center space-x-4 flex-1'>
					<Link className='font-thin' to='#'>
						Home
					</Link>
					<Link className='font-thin' to='#'>
						Services
					</Link>
					<Link className='font-thin' to='#'>
						About
					</Link>
					<Link className='font-thin' to='#'>
						Contact
					</Link>
				</nav>
				<Button className='mx-1' variant='outline'>
					Log in
				</Button>
				<Button className='mx-1' variant='outline'>
					<span>Sign in</span>
					<svg
						className='w-3 h-3 fill-current shrink-0 ml-2 -mr-1'
						viewBox='0 0 12 12'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z'
							fillRule='nonzero'
						/>
					</svg>
				</Button>
				<span className='mx-1'>
					<ModeToggle />
				</span>
			</header>

			<main
				className={`flex justify-center bg-cover bg-center h-screen  ${theme != 'dark' ? 'bg-light-mode' : 'bg-dark-mode'}`}
			>
				{/* Hero Section */}
				<div className='flex-row min-h-[calc(100vh-4rem-1px)] grid grid-cols-1 md:grid-cols-2 items-center p-6'>
					<div className='p-4 text-center md:text-left mx-auto'>
						<h1 className='text-4xl font-bold mb-4 mx-auto md:mx-0 max-w-sm'>
							We build your dream website and apps.
						</h1>
						<h3 className='text-xl mb-6'>
							Empowering businesses through technology.
						</h3>
						<Button>Contact us</Button> {/* Call to action */}
					</div>
					<div className='flex justify-center items-center p-4 '>
						{/* <img
							src={image}
							className='w-full h-auto max-w-md md:max-w-6xl rounded-md shadow-lg'
						></img> */}
					</div>
				</div>
			</main>
			<HorizontalScrolling />
		</>
	)
}
