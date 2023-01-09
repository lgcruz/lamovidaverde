import Head from 'next/head'
import { Fragment, ReactElement, useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './Layout.module.css';

interface LayoutProps {
    children: ReactElement;
}

function Layout(props: LayoutProps): ReactElement {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    function scrollFunction() {
        if (document.documentElement.scrollTop > 111) {
            document.getElementById('header-movida-verde').style.height = "71px";
            setScrolled(true);
        } else if (document.documentElement.scrollTop < 10) {
            document.getElementById('header-movida-verde').style.height = "171px";
            setScrolled(false);
        }
    }
    
    useEffect(() => {
        console.log(router.pathname);
        window.onscroll = function() {scrollFunction()};

    }, [])
    
    return (
        <Fragment>
            <Head>
                <title>La Movida Verde</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={style.headerStyle} id={'header-movida-verde'} >
                {!scrolled 
                    ? <button className={style.logoHeader}
                        onClick={(): void => {
                            router.push('/');
                        }} 
                    >
                        <img src='/la_movida_verde_logo.jpg' style={{ height:'100%', width: '100%', objectFit: 'contain' }} />
                    </button>
                    : 
                    <div className={style.hiddenSpace}></div>
                }
                
                <div className={style.optionsContainer}> 
                    <button 
                        className={`${
                            router.pathname === '/' && style.selected
                        } ${
                            style.buttonHeader
                        }`} 
                        onClick={(): void => {
                            router.push('/');
                        }}
                        >
                        {'Inicio'}
                    </button>
                    <button className={`${style.buttonHeader} ${router.pathname === '/about' && style.selected}`} onClick={(): void => {
                        router.push('/about');
                    }} >
                        {'Nosotros'}
                    </button>
                    <button className={`${style.buttonHeader} ${router.pathname === '/tutorials' && style.selected}`} onClick={(): void => {
                        router.push('/tutorials');
                    }} >
                        {'Tutoriales'}
                    </button>
                     <button className={`${style.buttonHeader} ${router.pathname === '/icons' && style.selected}`} onClick={(): void => {
                        router.push('/icons');
                    }} >
                        {'Iconos'}
                    </button>
                </div>
            </div>
            {/* <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }} > */}
                {props.children}
            {/* </div> */}
            {/* <div style={{ width: '100%', background: '#352109', color: 'white', position: 'sticky', bottom: 0 }}>{'this is a footer'}</div> */}
        </Fragment>
    );
}
export default Layout;