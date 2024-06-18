import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { IService } from '@/models/IService'

interface Props {
	service: IService
}

export default function SwiperCard({ service }: Props): JSX.Element {
	return (
		<Card className='w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-800'>
			<img
				src={service.imageSrc}
				alt='Service Image'
				className='w-full h-48 object-cover'
			/>
			<CardContent className='p-6 space-y-4'>
				<div>
					<h3 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
						{service.title}
					</h3>
					<p className='text-gray-600 dark:text-gray-400 mt-2'>
						{service.description}
					</p>
				</div>
				<div className='flex justify-between items-center'>
					<Button
						as='a'
						href={service.brochureLink}
						download
						className='bg-gray-900 text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800'
					>
						Download Brochure
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}
