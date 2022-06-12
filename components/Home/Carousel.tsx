import { Fragment, ReactElement, useEffect } from "react";



function Carousel(props: {
    title: string;
    description: string;
    src: string; 
    side: boolean;
} ): ReactElement {
    // const router = useRouter();
    const { side } = props;
    useEffect(() => {
        console.log(props);
    }, [])
    
    return (
        <Fragment>
            <div style={{ 
                background: 'white', 
                borderRadius: '30px', 
                width: '100%', 
                display: 'flex', 
                overflow: 'hidden',
                margin: '60px'
            }}>
                {!side && (
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }} >
                        <img
                            style={{ height: '600px' }} 
                            src={props.src} 
                        />
                    </div>
                )}
                
                <div style={{ 
                    width: 'calc(50% - 120px)', 
                    padding: '60px', 
                    display: 'flex', 
                    // alignItems: 'center', 
                    flexDirection: 'column',
                    textAlign: 'left'
                }}>
                    <h1>
                        {props.title}
                    </h1>
                    <p style={{ whiteSpace: 'pre-line' }}>
                        {props.description}
                    </p>
                </div>
                {side && (
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }} >
                        <img
                            style={{ height: '600px' }} 
                            src={props.src} 
                        />
                    </div>
                )}
                
            </div>
        </Fragment>
    );
}
export default Carousel;