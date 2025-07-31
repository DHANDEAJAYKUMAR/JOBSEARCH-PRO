import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-black-800 mt-10 text-gray-500 text-sm">
  © {new Date().getFullYear()} Ajay Kumar. All rights reserved.
</div>

    </div>
  );
};

export default AppLayout;