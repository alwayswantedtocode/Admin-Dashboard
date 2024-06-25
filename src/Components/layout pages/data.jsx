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
    id: 1,
    header: "Main",
    menu: [
      { id: 1, Icon: <HomeIcon />, name: "Home", link: "/" },
      { id: 2, Icon: <ProfileIcon />, name: "Profile", link: "/Profile/a" },
    ],
  },
  {
    id: 2,
    header: "Lists",
    menu: [
      { id: 1, Icon: <ProfileIcon />, name: "Users", link: "/Users" },
      { id: 2, Icon: <ProductIcon />, name: "Products", link: "/Products" },
      { id: 3, Icon: <OrderIcon />, name: "Order", link: "/Order" },
      { id: 4, Icon: <PostIcon />, name: "Posts", link: "/Posts" },
    ],
  },
  {
    id: 3,
    header: "General",
    menu: [
      { id: 1, Icon: <AppIcon />, name: "Elements", link: "/" },
      { id: 2, Icon: <NoteIcon />, name: "Notes", link: "/" },
      { id: 3, Icon: <FormIcon />, name: "Forms", link: "/" },
      { id: 14, Icon: <CalendarIcon />, name: "Calender", link: "/" },
    ],
  },
  {
    id: 4,
    header: "Maintenance",
    menu: [
      { id: 1, Icon: <SettingsIcon />, name: "Settings", link: "/" },
      { id: 2, Icon: <BackupIcon />, name: "Backups", link: "/" },
    ],
  },
  {
    id:5,
    header: "Analytics",
    menu: [
      { id: 1, Icon: <ChartIcon />, name: "Charts", link: "/" },
      { id: 2, Icon: <LogIcon />, name: "Logs", link: "/" },
    ],
  },
];

export { icons, menuLists };
