import Head from 'next/head'
import { Fragment, ReactElement, useEffect } from "react";
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
    // const router = useRouter();
    
    useEffect(() => {
        console.log(carouselList);
    }, [])
    
    return (
        <div style={{ 
            width: 'inherit', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
        }}>
            <div style={{ }}>
                {carouselList.map((banner, index) => {
                    // console.log('vvv');
                    
                    return <Carousel side={index % 2 === 0} title={banner.title} src={banner.src} description={banner.description}  />
                })}
            </div>
        </div>
    );
}
export default LandingPage;