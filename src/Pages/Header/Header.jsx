import HeaderContent from "./HeaderContent";



const Header = () => {
    return (
        <div className="heroWrapper">
            {/* =========== Hero section video player =========== */}
            <video
                className="heroVideo"
                src="https://res.cloudinary.com/dbq3boaji/video/upload/v1714419210/Joy%20sutradhor-portfolio/Developer_Coding_Background_ezrxjd.mp4"
                loop
                autoPlay
                muted
            ></video>
            
            {/* =========== overlay video =========== */}
            <div className="overlay"></div>

            {/* =========== Code Editor section =========== */}
            <HeaderContent></HeaderContent>
        </div>
    );
};

export default Header;

