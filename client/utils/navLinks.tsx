import { RiHomeLine, RiKeyLine } from "react-icons/ri";
import { LiaUserAltSlashSolid } from "react-icons/lia";

export const getNavLinks = () => [
  { icon: <RiHomeLine />, title: "Dashboard",to:"/" },
  { icon: <LiaUserAltSlashSolid />, title: "Blocked User",to:"/blockedPage" },
  { icon: <RiKeyLine />, title: "Change API",to:"/manageApi" }
];