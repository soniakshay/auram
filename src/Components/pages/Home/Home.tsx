import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import SearchSection from "../../main-page-search-section/search-section";
import SaerchPropery from "../../search-property/search-propert";
import LatestLaunches from "../../latest-launches/latest-launches";
import Communities from "../../communities-section/communities";
import BuySellProductSection from "../../buy-sell-propery-section/buy-sell-property-section";
import Projects from "../../projects/projects";
import SubFooter from "../../sub-footer/sub-footer";
import Footer from "../../footer/footer";
import Header from "../../header/header";
import './home.css'
import image1 from "../../../assets/images/ghansoli/ghansoli-grid1.jpg";
import image2 from "../../../assets/images/chembur-grid-2.jpg";
import ghansolliimage1 from "../../../assets/images/ghansoli/ghansoli-grid1.jpg";
import homeimage from "../../../assets/images/home-f5.jpg";
import chamburimage from "../../../assets/images/chembur-grid-2.jpg";
import kargarImage from "../../../assets/images/khargar-grid-2.jpg";

function Home() {

    const [sectiondata,setSectionData]= useState(
        {
            heading: 'Communities',
            list:    [
                {
                    data: {
                        title: 'Ghansoli Sport City',
                        redirectLink:'/detail/ghansoli-sports-city'
                    },
                    style:{
                        backgroundImage: image1,
                        height: '500px'

                    }


                },
                {
                    data: {
                        title: 'Chembur City Centre',
                        redirectLink:'/detail/chembur-city-centre'
                    },

                    style:{
                        backgroundImage: image2,
                        height: '500px'

                    }


                },
                {
                    data: {
                        title: 'Shilphata City Junction ',
                        redirectLink:'/detail/shilphata-city-junction'
                    },
                    style:{
                        backgroundImage: image1,
                        height: '500px'

                    }


                },
            ],
        }
    )

    useEffect(() => {
        $(window).scroll(() => {
            var windowTop = $(window).scrollTop() + 50;
            var searchSection = $('#searchsectiondiv').height() + 100;

            if(windowTop >= searchSection) {
                $('#headerStick').css({"position": "fixed", "top": "0","width": "100%","z-index":"77777"});
            } else {
                $('#headerStick').css({"position": "relative","z-index":"77777"});

            }

        });
    }, []);
    return (
        <div className="Home">
            <SearchSection/>
                <div id='headerStick'>
                    <Header/>
                </div>
                <SaerchPropery/>
                <LatestLaunches/>
                <Communities communitiesData = {sectiondata} title background/>
                <BuySellProductSection/>
                <Projects/>
                <SubFooter/>
                <Footer/>
        </div>
);
}

export default Home;
