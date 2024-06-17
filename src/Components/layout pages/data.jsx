import NotificationIcon from "./Icons/notificationIcon";
import AppIcon from "./Icons/appIcon";
import SearchIcon from "./Icons/searchIcon";
import ExpandIcon from "./Icons/expandIcon";
import BackupIcon from "./Icons/backupIcon";
import CalendarIcon from "./Icons/calenderIcon";
import FormIcon from "./Icons/formIcon";
import HomeIcon from "./Icons/homeIcon";
import LogIcon from "./Icons/logIcon";
import NoteIcon from "./Icons/noteIcon";
import OrderIcon from "./Icons/orderIcon";
import PostIcon from "./Icons/postIcon";
import ProductIcon from "./Icons/productsIcon";
import ChartIcon from "./Icons/chartIcon";
import ProfileIcon from "./Icons/profileIcon";
import SettingsIcon from "./Icons/settingsIcon";

const icons = [
  { id: 1, Icon: <SearchIcon /> },
  { id: 2, Icon: <AppIcon /> },
  { id: 3, Icon: <ExpandIcon /> },
  { id: 4, Icon: <NotificationIcon /> },
];


const menuLists = [
  {
   
    header: "Main",
    menu: [
      { id: 1, Icon: <HomeIcon />, name: "Homepage", link: "/" },
      { id: 2, Icon: <ProfileIcon />, name: "Profile", link: "/Profile" },
    ],
  },
  {
   
    header: "Lists",
    menu: [
      { id: 3, Icon: <ProfileIcon />, name: "Users", link: "/Users" },
      { id: 4, Icon: <ProductIcon />, name: "Products", link: "/Products" },
      { id: 5, Icon: <OrderIcon />, name: "Order", link: "/Order" },
      { id: 6, Icon: <PostIcon />, name: "Posts", link: "/Posts" },
    ],
  },
  {
    
    header: "General",
    menu: [
      { id: 7, Icon: <AppIcon />, name: "Elements", link: "/Elements" },
      { id: 8, Icon: <NoteIcon />, name: "Notes", link: "/Notes" },
      { id: 9, Icon: <FormIcon />, name: "Forms", link: "/Forms" },
      { id: 10, Icon: <CalendarIcon />, name: "Calender", link: "/Calender" },
    ],
  },
  {
 
    header: "Maintenance",
    menu: [
      { id: 11, Icon: <SettingsIcon />, name: "Settings", link: "/Settings" },
      { id: 12, Icon: <BackupIcon />, name: "Backups", link: "/Backups" },
    ],
  },
  {
    
    header: "Analytics",
    menu: [
      { id: 13, Icon: <ChartIcon />, name: "Charts", link: "/Charts" },
      { id: 14, Icon: <LogIcon />, name: "Logs", link: "/Logs" },
    ],
  },
];


export { icons, menuLists };
