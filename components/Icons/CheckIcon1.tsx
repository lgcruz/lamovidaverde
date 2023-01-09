import { IconTemplateInterface } from "../../interfaces/iconInterfaces";
import Icon from "./Icon";

const CheckIcon1 = (props: IconTemplateInterface): JSX.Element => (
    <Icon viewBox="0 0 12 10" className={props.className} fill="none" width={props.width} height={props.height}>
        <path d="M1 4.33333L3.5 8L11 1" stroke={props.stroke} strokeWidth="2" strokeLinecap="round" />
    </Icon>
);

export default CheckIcon1;
