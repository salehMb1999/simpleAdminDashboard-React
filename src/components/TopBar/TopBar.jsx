import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
export default function TopBar() {
  return (
    <>
      <div className="flex justify-between items-center py-3 px-8">
        <div className="text-purple-500 text-2xl font-bold">Dashboard❤</div>
        <div className="flex gap-x-6 ">
          <div className="relative flex justify-center items-center cursor-pointer">
            <NotificationsNoneIcon />
            <span className="absolute top-0 -right-2 bg-red-500 rounded-full w-5 text-sm flex justify-center items-center h-5 text-white">
              2
            </span>
          </div>
          <div className="relative flex justify-center items-center cursor-pointer">
            <LanguageIcon />
            <span className="absolute top-0 -right-2 bg-red-500 rounded-full w-5 text-sm flex justify-center items-center h-5 text-white">
              2
            </span>
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <SettingsIcon />
          </div>
          <div className="w-12 h-12 overflow-hidden rounded-full cursor-pointer">
            <img className="w-full" src="images/tom.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
}
