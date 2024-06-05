import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default function HorizontalSwiper() {
	return (
		<>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination, Autoplay, Navigation]}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={true}
				loop={true}
				className=''
			>
				<SwiperSlide>
					<div key={1} className=' bg-gray-200 p-4 rounded shadow-md h-80'>
						Service 1
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div key={1} className=' bg-gray-200 p-4 rounded shadow-md h-80'>
						Service 1
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div key={1} className=' bg-gray-200 p-4 rounded shadow-md h-80'>
						Service 1
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div key={1} className=' bg-gray-200 p-4 rounded shadow-md h-80'>
						Service 1
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div key={1} className=' bg-gray-200 p-4 rounded shadow-md h-80'>
						Service 1
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div key={1} className=' bg-gray-200 p-4 rounded shadow-md h-80'>
						Service 1
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div key={1} className=' bg-gray-200 p-4 rounded shadow-md h-80'>
						Service 1
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div key={1} className=' bg-gray-200 p-4 rounded shadow-md h-80'>
						Service 1
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div key={1} className=' bg-gray-200 p-4 rounded shadow-md h-80'>
						Service 1
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
