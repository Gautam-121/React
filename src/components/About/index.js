import AppImage from "../../asset/App-image.png"
import DeliveryImage from "../../asset/Delivery_image.jpg"
import "./about.css"

const About = () => {

    return (
        <div className="about-us">
            <div className="first-about">
                <img
                    src={AppImage}
                    alt="This is App Image" 
                    width="650px"
                    className="about-img-first"
                    />
                <div className="about-first-para">
                    <h1 className="heading-about-first">SpiceFood -Discover the Best food  drinks</h1>
                    <p className="about-first-p">
                        SpiceFood is an online food ordering system which we have developed for restaurant owners and food lovers. Through SpiceFood we are helping customers to discover the best restaurants in city. If you are restaurant owner, you can easily register your restaurant and upload restaurant menu to start receiving online orders through this fast growing portal without any cost.
                    </p>
                </div>
            </div>
            <div className="second-about">
                <div>
                    <h1 className="heading-about-second">Vision</h1>
                    <p className="about-second-p">
                        For food lovers who want to order food from local restaurants online, the Food Ordering System will be an Internet-based application that will accept individual or group meal orders, process payments, and trigger delivery of the prepared meals to a designated location. For Restaurant owner who wants to take and grow their business online, with low budget can start their online restaurant business and get orders from many more customers.
                    </p>
                </div>
                <img
                    src={ DeliveryImage }
                    alt="This is Delivery Image"
                    className="about-img-second"
                />
            </div>
        </div>
    )
}

export default About