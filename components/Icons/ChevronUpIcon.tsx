import { IconTemplateInterface } from "../../interfaces/iconInterfaces";

import Icon from "./Icon";

const ChevronUpIcon = (props: IconTemplateInterface): JSX.Element => (
    <Icon iewBox="0 0 10 6" className={props.className} width={props.width} height={props.height}>
        <path
            d="M8.87764 4.52759C7.70764 3.08758 6.54764 1.65759 5.37764 0.217585C5.13764 -0.0724147 4.55764 -0.0724148 4.31764 0.217585C3.14764 1.65759 1.98764 3.08758 0.817638 4.52758C0.557637 4.83758 0.507637 5.27758 0.817637 5.58758C1.07764 5.84758 1.61764 5.90758 1.87764 5.58758C3.04764 4.14758 4.20764 2.71759 5.37764 1.27759C5.02764 1.27759 4.66764 1.27759 4.31764 1.27759C5.48764 2.71759 6.65764 4.14758 7.81764 5.58759C8.07764 5.89759 8.61764 5.85759 8.87764 5.58759C9.18764 5.27759 9.13764 4.83759 8.87764 4.52759Z"
            fill="#727C94"
        />
    </Icon>
);

export default ChevronUpIcon;