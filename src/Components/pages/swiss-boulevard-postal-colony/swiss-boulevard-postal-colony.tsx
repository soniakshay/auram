import React, {useState, useEffect, useRef, useCallback} from 'react';
import './swiss-boulevard-postal-colony.css';
import Header from "../../header/header";
import Footer from "../../footer/footer";
import {Col, Container, Row} from "react-bootstrap";
import PropertySummaryInfo from "../../property-summary-info/property-summary-info";
import PropertyDetailDescriptionSection
    from "../../property-detail-description-section/property-detail-description-section";
import VideoPresntationSection from "../../video-presentation-section/video-presentation-section";
import AmenitiesAndFeaturesSection from "../../amenitiesAndfeatures/amenities-and-features";
import FloorPlanSection from "../../floor-plan/floor-plan";
import PropertyContactSection from "../../propert-contact-section/property-contact-section";
import WalkThroughSection from "../../walkthrough-section/walkthrough-section";
import Gallary from "../../gallary/gallary";
import image1 from "../../../assets/images/swiss/swiss5.jpg";
import image2 from "../../../assets/images/swiss/swiss6.jpg";
import image3 from "../../../assets/images/swiss/swiss7.jpg";
import image4 from "../../../assets/images/swiss/swiss8.jpg";
import image5 from "../../../assets/images/swiss/swiss3.jpg";
import image6 from "../../../assets/images/swiss/swiss4.jpg";
import image7 from "../../../assets/images/swiss/swiss9.jpg";
import walkThroughImage from '../../../assets/images/swiss/swill-walkthrough.jpg'
import DetailBanner from "../../detail-banner/detail-banner";
import Banner  from '../../../assets/images/swiss/swiss1.jpg';
import DescriptionBanner from "../../../assets/images/swiss/swiss2.jpg";
import DescriptionLogo from "../../../assets/images/swiss/swisslogo2.png";
import floorplancreative from "../../../assets/images/floorplancreative.jpeg";
import Amenities1 from "../../../assets/images/icon/restaurant.svg";
import Amenities2 from "../../../assets/images/icon/astro.png";
import Amenities3 from "../../../assets/images/icon/home-icon-02.png";
import Amenities4 from "../../../assets/images/icon/sky.png";
import features1 from "../../../assets/images/icon/stclr1.jpg";
import features2 from "../../../assets/images/icon/stclr2.jpg";
import features3 from "../../../assets/images/icon/stclr3.jpg";
import features4 from "../../../assets/images/icon/stclr4.jpg";
import features5 from "../../../assets/images/icon/stclr8.jpg";
import features6 from "../../../assets/images/icon/stclr7.jpg";
import Pdf1 from "../../../assets/pdf/chembur-P51700000636.pdf"


import afterRegisterFloorPlanImage from '../../../assets/images/swiss/2bhk1.jpg';
import afterRegisterFloorPlanImage2 from '../../../assets/images/swiss/2bhk2.jpg';
import afterRegisterFloorPlanImage3 from '../../../assets/images/swiss/3bhk1.jpg';
import afterRegisterFloorPlanImage4 from '../../../assets/images/swiss/3bhk2.jpg';

import ContactFormDialog from "../../contact-form-dialog/contact-form-dialog";
import EnquireForm from "../../enquire-form/enquire-form";

function SwissBoulevardPostalColony(props) {
    const [openContactDialog,setContatDiaog] = useState(false);
    const [florPlanList,setFloorPlanList] =  useState([
        {
            btnTitle: '2 Bhk',
            title:'2-Bedroom Apartment',
            totalArea:'Total Area 649.71 sqft',
            image: floorplancreative,
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage
        },
        {
            btnTitle: '2 Bhk',
            title:'2-Bedroom Apartment',
            totalArea:'Total Area 733.02 sqft',
            image: floorplancreative,
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage2
        },
        {
            btnTitle: '3 Bhk',
            title:'3-Bedroom Apartment',
            totalArea:'Total Area 868.33 sqft',
            image: floorplancreative,
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage3
        },
        {
            btnTitle: '3 Bhk',
            title:'3-Bedroom Apartment',
            totalArea:'Total Area 1057.88 sqft',
            image: floorplancreative,
            afterRegistraionFloorPlanImage:afterRegisterFloorPlanImage4
        }
    ]);
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    const [propertyDetailDescriptionSection,setpropertyDetailDescriptionSection] = useState({
        banner:DescriptionBanner,
        logo:DescriptionLogo,
        title:'Give Your Heart Some Peace of Mind',
        desc:'You are about to embark upon one of the most exciting journeys of your life. That of choosing your new home. It is a moment of pride and joy. We would like to help you savor the anticipation of taking possession and moving into your castle, without the anxiety of uncertainty.',
        buttonsList: [
            {
                btntext:'DisCover More',
                buttonLink: null,
                buttonFunction: () => {
                    setContatDiaog(true);
                }
            },
            {
                btntext:'View Rera',
                buttonLink: Pdf1
            },

        ]
    })

    const [imageList,setImageList] = useState([
        {
            image:image1,
            col:6,
            responsiveCol: 12
        } ,
        {
            image:image2,
            col:6,
            responsiveCol: 12
        } ,
        {
            image:image3,
            col:6,
            responsiveCol: 12
        } ,
        {
            image:image4,
            col:6,
            responsiveCol: 12
        }

    ])
    const [imageList2,setImageList2] = useState([
        {
            image:image5,
            col:6,
            responsiveCol: 12
        } ,
        {
            image:image6,
            col:6,
            responsiveCol: 12
        } ,
        {
            image:image7,
            col:12,
            responsiveCol: 12
        } ,

    ])
    const [walkthroughInfo,setwalkthroughInfo] = useState({
        desc:`Presenting twin jewels Nakshatra and Swiss Boulevard, Chembur's star-powered residential properties in the making Not many localities can boast of straddling the best of both the eastern and western suburbs. Chembur is a realty hotspot, and a key residential neighborhood with excellent connectivity and access to key amenities like hospitals, schools, malls, restaurants, etc. With proximity to rail, road and air transport, and the construction of key road infrastructure, Chembur is a gateway to the rest of the city`,
        videoWalkhthrough: true,
        images:[
            {
                imageLink:walkThroughImage,
                btnText:'OverAll',
                videoLink: 'https://www.youtube.com/embed/shKTQFpUIoM',
            },
        ]
    })

    const [videoprasentationdata,setvideoprasentationdata] =  useState({
        title:'Video Presentation',
        subtitle: 'Luxuries That You and Your Family Truly Deserve',
        link:'https://www.youtube.com/embed/shKTQFpUIoM',
    });

    const [amenitiesFeaturesData,setamenitiesFeaturesData] = useState({
        title: 'Amenities & Features',
        amenitiesList:[
            {
                icon:Amenities1,
                title: 'Barbecue Alcove',
                subtitle:null,
            },
            {
                icon:Amenities2,
                title: 'Astro Deck',
                subtitle:null,
            },
            {
                icon:Amenities3,
                title: 'Terrace Garden',
                subtitle:null,
            },
            {
                icon:Amenities4,
                title: 'Open to sky Sit-outs',
                subtitle:null,
            }
        ],
        featuresList: [
            {
                icon:features1,
                title: '5 Miutes',
                subtitle:'to Station',
            },
            {
                icon:features2,
                title: '5 Miutes',
                subtitle:'to School',
            },
            {
                icon:features3,
                title: '10 Miutes',
                subtitle:'to Mall/Market',
            },
            {
                icon:features4,
                title: '30 Miutes',
                subtitle:'to Airport',
            },
            {
                icon:features5,
                title: '5 Miutes',
                subtitle:'to Hospital',
            },
            {
                icon:features6,
                title: '5 Miutes',
                subtitle:'to Bank/ATMs',
            },
        ]


    });


    const [propertySummaryInfo,setpropertySummaryInfo] = useState({
        StartingPrice: 'INR 2.20 cr',
        StartingArea:'868 sq.ft',
        BookingAmount:'INR 1 Lac'
    });
    const onSubmit = () => {
        localStorage.setItem('registration',true);
        setContatDiaog(false);
    }
    useEffect(()=>{
        setContatDiaog(true);
    },[])
    return (
        <div className='SwissBoulevardPostalColonyMain'>
            {
                openContactDialog &&  <ContactFormDialog closeDialog={setContatDiaog} onsubmitevent={onSubmit}/>
            }
            <Header/>
            <DetailBanner banner={Banner}/>
            <PropertyDetailDescriptionSection openContacctDialog={setContatDiaog} propertyDetailDescriptionSection={propertyDetailDescriptionSection}/>
            <PropertySummaryInfo propertySummaryInfo={propertySummaryInfo}/>
            <VideoPresntationSection videoprasentationdata = {videoprasentationdata}/>
            <AmenitiesAndFeaturesSection amenitiesFeatures = {amenitiesFeaturesData}/>
            <FloorPlanSection florPlanList={florPlanList}/>
            <PropertyContactSection/>
            <Gallary imagelist={imageList2} title/>
            <WalkThroughSection walkthroughInfo={walkthroughInfo}/>
            <Gallary imagelist={imageList}/>
            <Footer/>
            <EnquireForm/>
        </div>
    )
}

export default SwissBoulevardPostalColony;

