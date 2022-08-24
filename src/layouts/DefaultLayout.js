import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import './DefaultLayout.scss'

function DefaultLayout({ children }) {
    return (
        <div className='main'>
            <Header />
            <div className='main-wrapper'>
                <Sidebar />
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    );
}


export default DefaultLayout;
