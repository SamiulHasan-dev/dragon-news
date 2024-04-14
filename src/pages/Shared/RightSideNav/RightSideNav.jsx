import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4">
                <h2 className="text-2xl my-3">Login With</h2>
                <button className="btn btn-outline w-full my-3">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full my-3">
                    <FaGithub></FaGithub>
                    GitHub
                </button>

                <h2 className="text-2xl my-3">Find Us</h2>
                <a href="" className="p-4 flex gap-2 items-center border rounded-t-lg">
                    <FaFacebook ></FaFacebook>
                    Facebook
                </a>
                <a href="" className="p-4 flex gap-2 items-center border-x ">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a href="" className="p-4 flex gap-2 items-center border rounded-b-lg">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* q zone */}
            <div className="p-4 space-y-3 mb-4">
                <h2 className="text-2xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;