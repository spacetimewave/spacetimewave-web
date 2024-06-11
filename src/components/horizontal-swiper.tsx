import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const services = [
	{
		id: 1,
		title: 'Software',
		description: 'Ad hoc software',
		content: 'Card Content',
		footer: 'Card Footer',
	},
	{
		id: 2,
		title: 'AI',
		description: 'Artificial Intelligence',
		content: 'Consulting Content',
		footer: 'Consulting Footer',
	},
	{
		id: 3,
		title: 'Blockchain',
		description: '24/7 support services',
		content: 'Support Content',
		footer: 'Support Footer',
	},
	{
		id: 4,
		title: 'Data',
		description: 'Big Data, Analytics, and Visualization',
		content: '',
		footer: '',
	},
	{
		id: 5,
		title: 'Infrastructure',
		description: 'Azure Cloud Infrastucture',
		content: '',
		footer: '',
	},
]

export default function HorizontalSwiper() {
	return (
		<>
			<Swiper
				className='pt-4 pb-6'
				modules={[Pagination, Autoplay, Navigation]}
				/* Leave this commented if you use breakpoints */
				// slidesPerView={3}
				// spaceBetween={30}

				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
			>
				{services.map((service) => (
					<SwiperSlide key={service.id}>
						<div className='p-4'>
							<Card className='bg-secondary min-h-[40vh]'>
								<CardHeader>
									<CardTitle>{service.title}</CardTitle>
									<CardDescription>{service.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<p>{service.content}</p>
								</CardContent>
								<CardFooter>
									<p>{service.footer}</p>
								</CardFooter>
							</Card>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
