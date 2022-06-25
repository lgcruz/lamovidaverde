import Head from 'next/head'
import { Fragment, ReactElement, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './Layout.module.css';

interface LayoutProps {
    children: ReactElement;
}

function Layout(props: LayoutProps): ReactElement {
    const router = useRouter();
    
    useEffect(() => {
        console.log(router.pathname);
    }, [])
    
    return (
        <Fragment>
            <Head>
                <title>La Movida Verde</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={style.headerStyle} >
                <button className={style.logoHeader}
                    onClick={(): void => {
                        router.push('/');
                    }} 
                >
                    <img src='/la_movida_verde_logo.jpg' style={{ height: '120px' }} />
                </button>
                
                <div className={style.optionContainer}>
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
                </div>
            </div>
            <div style={{ display: 'flex', width: '100%', height: '100%' }} >
                {props.children}
            </div>
            <div style={{ width: '100%', background: '#352109', color: 'white' }}>{'this is a footer'}</div>
        </Fragment>
    );
}
export default Layout;