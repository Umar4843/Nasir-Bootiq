import React from 'react';
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Mousewheel } from 'swiper/modules';
import Footer from "./Footer";
import './Swiper.css';

export default function App() {
    return (
        <>
            <Swiper
                direction={'vertical'}
                keyboard={{ enabled: true, pageUpDown: true }}
                mousewheel={true}
                pagination={{ clickable: true }}
                speed={800}
                effect="slide"
                modules={[Keyboard, Pagination, Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw9601b3ce/images/homepage/desktop-home-bannner-1920x1080NEWARIVAL-PK.jpg" alt="New Arrival" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwb7ef91c9/images/homepage/0.0-1sale-pk-desktop-home-bannner-1920x1080-febPK.jpg" alt="Sale Banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw1e9dc9dc/0.0-0.0-0.e06-desktop-home-bannner-1920x1080-e06.jpg" alt="E06 Collection" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw082d1c2b/images/homepage/0.0-1Eid-new-desktop-home-bannner-1920x1080-fabEid.jpg" alt="Eid Collection" />
                </SwiperSlide>
            <SwiperSlide className='footer'>
            <Footer />
            </SwiperSlide>
            </Swiper>
        </>
    );
}
