import { Fragment, ReactElement, useEffect } from "react";
import style from './Carousel.module.css';


function Carousel(props: {
    title: string;
    description: string;
    src: string; 
    side: boolean;
    id: number;
} ): ReactElement {
    // const router = useRouter();
    const { side, id } = props;
    useEffect(() => {
        console.log(props);
    }, [])
    
    return (
        <Fragment>
            <div className={style.carouselContainer} key={`${id}-carousel`}>
                {!side && (
                    <div className={style.carouselImageContainer} >
                        <a href={props.src}>
                            <img
                                // style={{ height: '600px' }} 
                                className={style.carouselImages}
                                src={props.src} 
                            />
                        </a>
                    </div>
                )}
                
                <div className={style.carouselTextContainer}>
                    <h1>
                        {props.title}
                    </h1>
                    <p style={{ whiteSpace: 'pre-line' }}>
                        {props.description}
                    </p>
                </div>
                {side && (
                    <div className={style.carouselImageContainer} >
                        <a href={props.src}>
                            <img
                                className={style.carouselImages}
                                src={props.src} 
                            />
                        </a>
                    </div>
                )}
                
            </div>
        </Fragment>
    );
}
export default Carousel;