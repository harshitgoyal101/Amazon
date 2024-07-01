
import oppofront from "../assets/oppo-front.jpg";
import oppoback from "../assets/oppo-back.jpg";
import oppobackangle from "../assets/oppo-backangle.jpg";
import oppofeatures from "../assets/oppo-features.jpg";
import opporenew from "../assets/oppo-renewed.jpg";
import opposide from "../assets/oppo-side.jpg";
import oppo from "../assets/oppo.jpg";
import IosShareIcon from '@mui/icons-material/IosShare';
import "../styles/ProductPage.css"
import GradeIcon from '@mui/icons-material/Grade';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

export default function ProductPage() {
    return <>
    <div className="images">
        <div >
            <img className="sideimg" src={oppofront} alt="" />
            <br/>
            <img className="sideimg" src={oppoback} alt="" />
            <br/>
            <img className="sideimg" src={oppobackangle} alt="" />
            <br/>
            <img className="sideimg" src={oppofeatures} alt="" />
            <br/>
            <img className="sideimg" src={opporenew} alt="" />
            <br/>
            <img className="sideimg" src={opposide} alt="" />
            <br/>
            <img className="sideimg" src={oppo} alt="" />
        </div>
        <div className="maximage">
            <div className="shareicon"><IosShareIcon/></div>
            <div><img className="mainImage" src={oppofront} alt="" /></div>
        </div>
        <div>
            <div className="product-title"><p>OPPO A3 Pro 5G (Moonlight Purple, 8GB RAM, 128GB Storage)|6.67” HD+ 120Hz Refresh Rate Screen | 45W SUPERVOOC|with No Cost EMI/Additional Exchange Offers</p>
            </div>
            <p className="visitlink">Visit the Oppo Store</p>
            <div className="rating"> 
                <div><p>5.0</p></div>
                <div className="star">
                <div><GradeIcon/></div>
                <div ><GradeIcon/></div>
                <div><GradeIcon/></div>
                <div><GradeIcon/></div>
                <div><StarBorderPurple500Icon /></div>
                </div>
                <div className="ratingNum"><p>2 ratings</p></div>
            </div>
        </div>
    </div>
    </>
}