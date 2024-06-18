import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import investment from '../assets/investment.jpg'
import infrastructure from '../assets/infrastructure.jpg'
import brain from '../assets/brain.jpg'
import bigData from '../assets/big-data.jpg'
import blockchain from '../assets/blockchain.jpg'
import software from '../assets/software.jpg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperCard from './swiper-card'
import { IService } from '@/models/IService'

const services: IService[] = [
	{
		id: 1,
		title: 'Software',
		description: 'Ad hoc software',
		imageSrc: software,
		brochureLink: '',
	},
	{
		id: 2,
		title: 'AI',
		description: 'Artificial Intelligence',
		imageSrc: brain,
		brochureLink: '',
	},
	{
		id: 3,
		title: 'Blockchain',
		description: '24/7 support services',
		imageSrc: blockchain,
		brochureLink: '',
	},
	{
		id: 4,
		title: 'Data',
		description: 'Big Data, Analytics, and Visualization',
		imageSrc: bigData,
		brochureLink: '',
	},
	{
		id: 5,
		title: 'Infrastructure',
		description: 'Azure Cloud Infrastucture',
		imageSrc: infrastructure,
		brochureLink: '',
	},
	{
		id: 6,
		title: 'Investment',
		description: 'Azure Cloud Infrastucture',
		imageSrc: investment,
		brochureLink: '',
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
							<SwiperCard service={service} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
