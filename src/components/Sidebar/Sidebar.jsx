import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      <div className="bg-slate-50 flex-1 p-5 border-slate-200 sticky top-10 border-2 rounded-md">
        <div className="mb-5">
          <p className="font-bold text-slate-400 opacity-70 mb-2">Dashboard</p>
          <ul className="ml-5">
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <Link className="w-full inline-block" to="/">
                <LineStyleIcon /> Home
              </Link>
            </li>
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <a className="w-full inline-block" href="#">
                <TimelineIcon /> Analytics
              </a>
            </li>
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <a className="w-full inline-block" href="#">
                <TrendingUpIcon /> Sales
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <p className="font-bold text-slate-400 opacity-70 mb-2">Quick Menu</p>
          <ul className="ml-5">
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <Link className="w-full inline-block" to="/users">
                <PermIdentityIcon /> Users
              </Link>
            </li>
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <Link className="w-full inline-block" to="/newUser">
                <PermIdentityIcon /> New User
              </Link>
            </li>
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <Link className="w-full inline-block" to="/products">
                <StorefrontIcon /> Products
              </Link>
            </li>
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <a className="w-full inline-block" href="#">
                <AttachMoneyIcon /> Transactions
              </a>
            </li>
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <a className="w-full inline-block" href="#">
                <BarChartIcon /> Reports
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <p className="font-bold text-slate-400 opacity-70 mb-2">
            Notifications
          </p>
          <ul className="ml-5">
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <a className="w-full inline-block" href="#">
                <MailOutlineIcon /> Mail
              </a>
            </li>
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <a className="w-full inline-block" href="#">
                <DynamicFeedIcon /> Feedback
              </a>
            </li>
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <a className="w-full inline-block" href="#">
                <ChatBubbleOutlineIcon /> Messages
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <p className="font-bold text-slate-400 opacity-70 mb-2">Staff</p>
          <ul className="ml-5">
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <a className="w-full inline-block" href="#">
                <WorkOutlineIcon /> manage
              </a>
            </li>
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <a className="w-full inline-block" href="#">
                <TimelineIcon /> Analytics
              </a>
            </li>
            <li className="px-3 py-1 text-slate-700 hover:bg-purple-100 rounded-md">
              <a className="w-full inline-block" href="#">
                <ReportIcon /> Reports
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
