import Icon from '@/components/icon'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import {
	NavigationMenu,
	NavigationMenuContent,
	// NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	// NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<>
			<header className='flex items-center h-14 px-4 border-b bg-white md:px-6 dark:bg-gray-950'>
				<Link className='flex items-center gap-2 mr-4' to='#'>
					<Icon />
					<span className='font-semibold'>spacetimewave</span>
				</Link>
				<nav className='hidden md:flex items-center space-x-4 flex-1'>
					<Link className='font-medium' to='#'>
						Home
					</Link>
					<Link className='font-medium' to='#'>
						Services
					</Link>
					<Link className='font-medium' to='#'>
						About
					</Link>
					<Link className='font-medium' to='#'>
						Contact
					</Link>
				</nav>
				<Button className='mx-1' variant='outline'>
					Log in
				</Button>
				<Button className='mx-1' variant='outline'>
					Sign in
				</Button>
				<span className='mx-1'>
					<ModeToggle />
				</span>
			</header>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Learn</NavigationMenuTrigger>
						<NavigationMenuContent>
							<NavigationMenuLink>Learn More</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	)
}
