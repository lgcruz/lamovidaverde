import Head from 'next/head'
import { Fragment, ReactElement, Ref, useEffect, useRef } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './Layout.module.css';
import { CarouselProps } from '../../interfaces/generalInterfaces';
import Carousel from './Carousel';


interface LandingPageProps {
    name: string;
    carouselList: CarouselProps[];
}

function LandingPage(props: LandingPageProps): ReactElement {
    const { carouselList } = props;
    const refCarousel = useRef();
    // const router = useRouter();
    
    // useEffect(() => {
    //     setInterval(() => {
    //         if ((refCarousel.current as HTMLElement).scrollLeft + (refCarousel.current as HTMLElement).clientWidth 
    //             === (refCarousel.current as HTMLElement).scrollWidth
    //         ) {
    //             (refCarousel.current as HTMLElement).scrollLeft = 0;
    //         } else {
    //             (refCarousel.current as HTMLElement)
    //                 .scrollLeft = (refCarousel.current as HTMLElement).scrollLeft 
    //                     + (refCarousel.current as HTMLElement).clientWidth;
    //         }
    //     }, 5000);
    // }, [])
    
    return (
        <div 
            style={{ 
                width: '-webkit-fill-available', 
                display: '-webkit-inline-box', 
                alignItems: 'center', 
                justifyContent: 'center',
                overflow: 'hidden',
                transition: '0.2s',
                scrollBehavior: 'smooth'
            }}
            ref={refCarousel}
        >
            {carouselList.map((banner, index) => {
                
                return <Carousel 
                    side={index % 2 === 0} 
                    title={banner.title} 
                    src={banner.src} 
                    description={banner.description} 
                    id={index} />
            })}
        </div>
    );
}
export default LandingPage;