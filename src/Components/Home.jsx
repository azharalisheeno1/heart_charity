import pic from '../assets/images/slide/11.jpg';
import pic2 from '../assets/images/slide/22.jpg';
import pic3 from '../assets/images/slide/33.jpg';

// import Swiper core and required modules
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import '../App.css';

function Home() {
    const Slides = [
        {
            id: 1,
            Pic: pic,
            title: "Humanity",
            description: "Please tell your friends about our website"
        },
        {
            id: 2,
            Pic: pic2,
            title: "Be a Kind Heart",
            description: "Professional charity theme based on Tailwind CSS By Azhar Sheeno"
        },
        {
            id: 3,
            Pic: pic3,
            title: "Non-Profit",
            description: "You can support us to grow more"
        },
    ];

    return (
        <>
            <div id='Home' className='pt-12'>
                <Swiper
                    modules={[Navigation, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 3000 }}
                    speed={1000}
                >
                    {Slides.map((Slide) => (
                        <SwiperSlide key={Slide.id}>
                            <div className="bg-gray-100  md:mt-5 ">
                                <div className="relative flex items-end  min-h-[500px]  md:h-screen justify-center">
                                    <img 
                                        src={Slide.Pic} 
                                        alt={Slide.title} 
                                        className="absolute inset-0   md:h-screen object-cover  h-[500px]   md:w-full   "
                                    />
                                    <div className="relative z-10 text-center text-white p-4 md:p-8 bg-black bg-opacity-50 w-full bottom-0 md:bottom-20">
                                        <h1 className="text-lg md:text-4xl font-bold mb-2">{Slide.title}</h1>
                                        <p className="text-sm md:text-lg">{Slide.description}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default Home;
