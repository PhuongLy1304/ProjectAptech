import Header from "../Header";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";

/**
 * Là component
 * Chứa all các UI dùng chung
 * Header
 * Footer
 */

const DefaultLayout = () => {
    console.log("DefaultLayout");
    return (
        <div className="container mx-auto">
            <Header />
            {/* Body content */}
            <main>
                {/* Nội dung các trang sẽ load lên ở đây */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;