import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import style from './ProfileCard.module.css';


function ProfileCard(props: {
    name: string;
    photo: string;
    route: string; 
    // side: boolean;
    // id: number;
} ): ReactElement {
    const router = useRouter();
    const { name, photo, route } = props;
    useEffect(() => {
        console.log(props);
    }, [])
    
    return (
        <div className={style.profileContainer} >
            <div className={style.profileFrame}>
                <div className={style.innerFrame}>
                <img src={photo} className={style.profilePhoto} />
                </div>
            </div>
            <p className={style.infoText}>{name}</p>
            <button 
                className={''}
                onClick={(): void => {
                    router.push(`/tutorials/${route}`);
                }}
                >
                
                <img src="https://img.icons8.com/windows/96/000000/circled-chevron-right.png"/>
            </button>
        </div>
    );
}
export default ProfileCard;