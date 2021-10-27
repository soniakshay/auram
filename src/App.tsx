import React ,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-sticky-header/styles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import SearchPropertyDetail from "./Components/search-property-detail/search-property-detail";
import SwissBoulevardPostalColony from "./Components/pages/swiss-boulevard-postal-colony/swiss-boulevard-postal-colony";
import Paramount from "./Components/pages/paramount/paramount";
import Qisland from "./Components/pages/qisland/qisland";
import CommunitiesDetailMain from "./Components/pages/communities-detail/communities-detail";
import GhansoliSportsCity from "./Components/pages/ghansoli-sports-city/ghansoli-sports-city";
import ChemburCityCentre from "./Components/pages/chembur-city-centre/chembur-city-centre";
import ShilphataCityJunction from "./Components/pages/shilphata-city-junction/shilphata-city-junction";
import KhargharRollingGreens from "./Components/pages/kharghar-rolling-greens/kharghar-rolling-greens";
import PrivacyPolicy from "./Components/pages/privacy-policy/privacy-policy";
import TermsOfUse from "./Components/pages/terms-of-use/terms-of-use";
import Q5 from "./Components/pages/q5/q5";
import Q2 from "./Components/pages/q2/q2";
import Q6 from "./Components/pages/q6/q6";
import FloorPlanFullSection from "./Components/floor-plan-full/floor-plan-full";
import Q5FloorPlan from "./Components/pages/q5-floor-plan/q5-floor-plan";
import Q2FloorPlan from "./Components/pages/q2-floor-plan/q2-floor-plan";
import Q6FloorPlan from "./Components/pages/q6-floor-plan/q6-floor-plan";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                <Home/>
                </Route>
                <Route exact  path="/detail">
                    <SearchPropertyDetail/>
                </Route>
                <Route exact  path="/commercial-property-list">
                    <SearchPropertyDetail commercialPropertyList={true}/>
                </Route>
                <Route exact  path="/detail/swiss-boulevard-postal-colony">
                    <SwissBoulevardPostalColony/>
                </Route>

                <Route exact  path="/detail/paramount">
                    <Paramount/>
                </Route>
                <Route exact  path="/detail/qisland">
                    <Qisland/>
                </Route>
                <Route exact  path="/detail/ghansoli-sports-city">
                    <GhansoliSportsCity/>
                </Route>

                <Route exact  path="/detail/chembur-city-centre">
                    <ChemburCityCentre/>
                </Route>

                <Route exact  path="/detail/shilphata-city-junction">
                    <ShilphataCityJunction/>
                </Route>

                <Route exact  path="/detail/kharghar-rolling-greens">
                    <KhargharRollingGreens/>
                </Route>

                <Route exact  path="/privacy-policy">
                    <PrivacyPolicy/>
                </Route>

                <Route exact  path="/terms-of-use">
                    <TermsOfUse/>
                </Route>

                <Route exact  path="/detail/q5">
                    <Q5/>
                </Route>

                <Route exact  path="/detail/q2">
                    <Q2/>
                </Route>
                <Route exact  path="/detail/q6">
                    <Q6/>
                </Route>
                <Route exact  path="/detail/q5-floor-plan">
                    <Q5FloorPlan/>
                </Route>
                <Route exact  path="/detail/q2-floor-plan">
                    <Q2FloorPlan/>
                </Route>
                <Route exact  path="/detail/q6-floor-plan">
                    <Q6FloorPlan/>
                </Route>



            </Switch>
        </Router>
    </div>
  );
}

export default App;
