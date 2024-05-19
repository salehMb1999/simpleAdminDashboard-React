import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import Sidebar from "./components/Sidebar/Sidebar";
export default function App() {
  let router = useRoutes(routes);

  return (
    <>
      <TopBar />
      <div className="conatiner mx-auto flex items-start gap-x-5 justify-between my-5 px-10">
        <Sidebar />
        {router}
      </div>
    </>
  );
}
