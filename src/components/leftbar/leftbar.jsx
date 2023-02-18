import "./leftbar.scss"
import Courses from "../../images/courses icon.png";
import Events from "../../images/events icon.png";
import Friends from "../../images/fish bowl - friends.png";
import Fundraiser from "../../images/fundraiser icon.png";
import Gallery from "../../images/gallery icon.png";
import Gaming from "../../images/gaming icon.png";
import Groups from "../../images/Group icon.png";
import Marketplace from "../../images/marketplace icon.webp";
import Memories from "../../images/memories icon.png";
import Messages from "../../images/messages icon.png";
import Tutorials from "../../images/tutorials icon.jpeg";
import Videos from "../../images/videos icon.png";
import Watch from "../../images/watch icon.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

// imported icons for all of the buttons in the left sidebar of the homepage 
const Leftbar = () => {

    const { currentUser } = useContext(AuthContext);
    
    return(
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="" />
                        <span>Tank Mates</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Marketplace} alt="" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={Watch} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt="" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Your Shortcuts</span>
                    <div className="item">
                        <img src={Events} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt="" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div>
            </div>
            <hr/>
            <div className="menu">
                <span>Other Features</span>
                <div className="item">
                        <img src={Fundraiser} alt="" />
                        <span>Fundraisers</span>
                    </div>
                    <div className="item">
                        <img src={Tutorials} alt="" />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={Courses} alt="" />
                        <span>Courses</span>
                    </div>
            </div>
            </div>
            </div>
    );
};

export default Leftbar;