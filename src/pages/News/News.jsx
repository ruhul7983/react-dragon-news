import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import newsPic from '../../assets/editorsInsight1.png';
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-x-5">
                <div className="col-span-3">
                    <h4 className="text-xl">Dragon News</h4>
                    <img className="w-full" src={newsPic} alt="" />
                    <h1 className="text-xl font-bold my-5">Joe biden</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eveniet odio aut aliquid nihil at. Vel, doloremque dolorum. Molestias nesciunt eum deserunt deleniti, fugit soluta ex dicta nostrum repellendus architecto velit eius, rem, reprehenderit saepe. Officia, ipsam incidunt. Consectetur illo exercitationem aperiam autem officia delectus commodi at sunt ipsum rerum blanditiis iure ratione magni maiores explicabo est quos, veritatis esse earum suscipit ad dolorem dolorum, consequatur facilis! Repudiandae repellat vitae provident, labore cum delectus necessitatibus doloribus porro maxime dolores dolorum nisi repellendus excepturi cupiditate dolore? Impedit voluptas cupiditate nihil exercitationem itaque quam saepe omnis fugiat, iusto accusantium, cum accusamus rem?</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;