import Tippy from "@tippyjs/react";
import ActivateIcon from "../Icons/ActivateIcon";
import AlertIcon from "../Icons/AlertIcon";
import AngryIcon from "../Icons/AngryIcon";
import AppIcon from "../Icons/AppIcon";
import ArchivedIcon from "../Icons/ArchivedIcon";
import ArchiveIcon from "../Icons/ArchiveIcon";
import ArrowIcon from "../Icons/ArrowIcon";
import AssignationIcon from "../Icons/AssignationIcon";
import AttachIcon from "../Icons/AttachIcon";
import AudioCloseIcon from "../Icons/AudioCloseIcon";
import style from './IconGrid.module.css';
import BackArrowIcon from "../Icons/BackArrowIcon";
import BackIcon from "../Icons/BackIcon";
import BlocksCardIcon from "../Icons/BlocksCardIcon";
import BlueFlagIcon from "../Icons/BlueFlagIcon";
import BotIcon from "../Icons/BotIcon";
import BroadcastIcon from "../Icons/BroadcastIcon";
import BuilderIcon from "../Icons/BuilderIcon";
import CalendarIcon from "../Icons/CalendarIcon";
import CalendarIcon1 from "../Icons/CalendarIcon1";
import CallIcon from "../Icons/CallIcon";
import CancelIcon from "../Icons/CancelIcon";
import ChannelIcon from "../Icons/ChannelIcon";
import Chat from "../Icons/Chat";
import ChatIcon from "../Icons/ChatIcon";
import ChatMobileIcon from "../Icons/ChatMobileIcon";
import ChatOutlineIcon from "../Icons/ChatOutlineIcon";
import CheckCircleIcon from "../Icons/CheckCircleIcon";
import CheckIcon from "../Icons/CheckIcon";
import CheckIcon1 from "../Icons/CheckIcon1";
import CheckIcon2 from "../Icons/CheckIcon2";
import CheckmarkIcon from "../Icons/CheckmarkIcon";
import CheckPointIcon from "../Icons/CheckPointNodeIcon";
import CheerIcon from "../Icons/CheerIcon";
import ChevronLeftIcon from "../Icons/ChevronLeftIcon";
import ChevronRightIcon from "../Icons/ChevronRightIcon";
import ChevronUpIcon from "../Icons/ChevronUpIcon";
import Circle from "../Icons/Circle";
import Clean from "../Icons/Clean";
import CleanIcon from "../Icons/CleanIcon";
import ClientICon from "../Icons/ClientIcon";
import ClockIcon from "../Icons/ClockIcon";
import ClosedMailIcon from "../Icons/ClosedMailIcon";
import CloseIcon from "../Icons/CloseIcon";
import CloseIcon1 from "../Icons/CloseIcon1";
import CloseIcon2 from "../Icons/CloseIcon2";
import CommentIcon from "../Icons/CommentIcon";
import CreateIcon from "../Icons/CreateIcon";
import CubeIcon from "../Icons/CubeIcon";
import CustomPaymentIcon from "../Icons/CustomPaymentIcon";
import DataBaseIcon from "../Icons/DataBaseIcon";
import DataPic from "../Icons/DataPic";
import DateIcon from "../Icons/DateIcon";
import DatumIcon from "../Icons/DatumIcon";
import DeliveredReplyIcon from "../Icons/DeliveredReplyIcon";
import DesactivateIcon from "../Icons/DesactivateIcon";
import DiaryIcon from "../Icons/DiaryIcon";
import DocumentIcon from "../Icons/DocumentIcon";
import Dots from "../Icons/Dots";
import DotsMenu from "../Icons/DotsMenu";
import DoubleCheckmarkIcon from "../Icons/DoubleCheckmarkIcon";
import DoubleCheckmarkIcon1 from "../Icons/DoubleCheckmarkIcon1";
import DoubleCheckmarkIcon2 from "../Icons/DoubleCheckmarkIcon2";
import DownIcon from "../Icons/DownIcon";
import DownloadElementIcon from "../Icons/DownloadElementIcon";
import DownloadIcon from "../Icons/DownloadIcon";
import DownloadIcon1 from "../Icons/DownloadIcon1";
import DonwloadIcon2 from "../Icons/DownloadIcon2";


function IconGrid() {
    const iconList = [
        { element: <ActivateIcon width={38} height={40} />, name: "ActivateIcon", night: false },
        { element: <AlertIcon width={40} height={40} />, name: "AlertIcon", night: false },
        { element: <AngryIcon width={40} height={40} />, name: "AngryIcon", night: false },
        { element: <AppIcon width={40} height={40} />, name: "AppIcon", night: false },
        { element: <ArchivedIcon width={40} height={40} />, name: "ArchivedIcon", night: false },
        { element: <ArchiveIcon />, name: "ArchiveIcon", night: false }, // {/* fixed params */}
        { element: <ArrowIcon width={40} height={40} />, name: "ArrowIcon", night: false },
        { element: <AssignationIcon width={40} height={40} />, name: "AssignationIcon", night: false },
        { element: <AttachIcon width={40} height={40} />, name: "AttachIcon", night: false },
        { element: <AudioCloseIcon width={40} height={40} />, name: "AudioCloseIcon", night: false },
        { element: <BackArrowIcon width={40} height={40} />, name: "BackArrowIcon", night: false },
        { element: <BackIcon width={40} height={40} />, name: "BackIcon", night: false },
        { element: <BlocksCardIcon isActive={false} width={38} height={40} />, name: "BlocksCardIcon", night: false },
        { element: <BlueFlagIcon width={40} height={40} />, name: "BlueFlagIcon", night: false },
        { element: <BotIcon width={40} height={40} />, name: "BotIcon", night: false },
        { element: <BroadcastIcon width={40} height={40} />, name: "BroadcastIcon", night: true },
        { element: <BuilderIcon width={40} height={40} />, name: "BuilderIcon", night: false },
        { element: <CalendarIcon width={40} height={40} />, name: "CalendarIcon", night: false },
        { element: <CalendarIcon1 width={40} height={40} />, name: "CalendarIcon1", night: false }, // svg icon local
        { element: <CallIcon width={40} height={40} />, name: "CallIcon", night: false },
        { element: <CancelIcon width={40} height={40} />, name: "CancelIcon", night: false }, // svg icon local
        { element: <ChannelIcon width={40} height={40} />, name: "ChannelIcon", night: false },
        { element: <Chat width={40} height={40} />, name: "Chat", night: false },
        { element: <ChatIcon width={40} height={40} />, name: "ChatIcon", night: false },
        { element: <ChatMobileIcon width={40} height={40} />, name: "ChatMobileIcon", night: false },
        { element: <ChatOutlineIcon width={40} height={40} />, name: "ChatOutlineIcon", night: false },
        { element: <CheckCircleIcon width={40} height={40} />, name: "CheckCircleIcon", night: false },
        { element: <CheckIcon width={40} height={40} />, name: "CheckIcon", night: true },
        { element: <CheckIcon1 width={40} height={40} stroke={"white"} />, name: "CheckIcon1", night: true },
        { element: <CheckIcon2 width={40} height={40} />, name: "CheckIcon2", night: false },
        { element: <CheckmarkIcon width={40} height={40} />, name: "CheckmarkIcon", night: false },
        { element: <CheckPointIcon width={40} height={40} />, name: "CheckPointIcon", night: false }, // fill issue // svg icon local
        { element: <CheerIcon width={40} height={40} />, name: "CheerIcon", night: false }, // svg local
        { element: <ChevronLeftIcon width={40} height={40} />, name: "ChevronLeftIcon", night: false },
        { element: <ChevronRightIcon width={40} height={40} />, name: "ChevronRightIcon", night: false },
        { element: <ChevronUpIcon width={40} height={40} />, name: "ChevronUpIcon", night: false },
        { element: <Circle width={40} height={40} />, name: "Circle", night: false },
        { element: <Clean width={40} height={40} />, name: "Clean", night: false }, // fill issue
        { element: <CleanIcon width={40} height={40} />, name: "CleanIcon", night: false }, // fill issue
        { element: <ClientICon width={40} height={40} />, name: "ClientICon", night: false },
        { element: <ClockIcon width={40} height={40} />, name: "ClockIcon", night: false },
        { element: <ClosedMailIcon width={40} height={40} />, name: "ClosedMailIcon", night: false },
        { element: <CloseIcon width={40} height={40} />, name: "CloseIcon", night: false },
        { element: <CloseIcon1 width={40} height={40} />, name: "CloseIcon1", night: false },
        { element: <CloseIcon2 width={40} height={40} />, name: "CloseIcon2", night: false },
        { element: <CommentIcon width={40} height={40} />, name: "CommentIcon", night: false },
        { element: <CreateIcon width={40} height={40} />, name: "CreateIcon", night: false }, // fill issue // svg icon local 
        { element: <CubeIcon width={40} height={40} stroke={"black"} />, name: "CubeIcon", night: false },
        { element: <CustomPaymentIcon width={40} height={40} />, name: "CustomPaymentIcon", night: false },
        { element: <DataBaseIcon width={40} height={40} stroke="black" />, name: "DataBaseIcon", night: false },
        { element: <DataPic width={40} height={40} />, name: "DataPic", night: false },
        { element: <DateIcon width={40} height={40} />, name: "DateIcon", night: false },
        { element: <DatumIcon width={40} height={40} />, name: "DatumIcon", night: false },
        { element: <DeliveredReplyIcon width={40} height={40} />, name: "DeliveredReplyIcon", night: false },
        { element: <DesactivateIcon width={40} height={40} />, name: "DesactivateIcon", night: false },
        { element: <DiaryIcon width={40} height={40} />, name: "DiaryIcon", night: false },
        { element: <DocumentIcon width={40} height={40} />, name: "DocumentIcon", night: true },
        { element: <Dots width={40} height={40} />, name: "Dots", night: false },
        { element: <DotsMenu width={40} height={40} />, name: "DotsMenu", night: false },
        { element: <DoubleCheckmarkIcon width={40} height={40} />, name: "DoubleCheckmarkIcon", night: false },
        { element: <DoubleCheckmarkIcon1 width={40} height={40} />, name: "DoubleCheckmarkIcon1", night: false },
        { element: <DoubleCheckmarkIcon2 width={40} height={40} />, name: "DoubleCheckmarkIcon2", night: false },

        { element: <DownIcon width={40} height={40} />, name: "DownIcon", night: false },
        { element: <DownloadElementIcon width={40} height={40} fill="white" stroke="black" />, name: "DownloadElementIcon", night: false },
        { element: <DownloadIcon width={40} height={40} />, name: "DownloadIcon", night: true }, // svg icon local
        { element: <DownloadIcon1 width={40} height={40} />, name: "DownloadIcon1", night: false },
        { element: <DonwloadIcon2 width={40} height={40} />, name: "DocumentIcon2", night: false },
        { element: <Dots width={40} height={40} />, name: "Dots", night: false },
        { element: <DotsMenu width={40} height={40} />, name: "DotsMenu", night: false },
    ];
    return <div className={style.gridContainerStyle}>
        {iconList.map((iconObj) => {
            return (
                <Tippy theme="iconTheme" content={iconObj.name} placement={"bottom"} >
                    <div className={iconObj.night ? style.gridStyleNight : style.gridStyle}>
                        {iconObj.element}
                    </div>
                </Tippy>);
        })}
    </div >;
}
export default IconGrid;
