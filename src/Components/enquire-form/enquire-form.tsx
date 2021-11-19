import React, { useState, useEffect, useRef, useCallback } from 'react';
import './enquire-form.css'
import {Button, Col, Container, Row} from "react-bootstrap";


function EnquireForm() {
    return (
        <div className='EnquireFormMain'>
            <Container fluid>
                <Row>
                    <Col lg={2} md={2} sm={12} xs={12}>
                        <p className={'etitle'}>Enquire Now</p>
                    </Col>
                    <Col lg={2} md={2} sm={12} xs={12} className={'alignCenterContent'}>
                        <input type={'text'} className={'input fullWidth'} placeholder={'Name'}/>
                    </Col>
                    <Col lg={2} md={2} sm={12} xs={12} className={'alignCenterContent'}>
                        <input type={'text'} className={'input fullWidth'} placeholder={'Email'}/>
                    </Col>
                    <Col lg={2} md={2} sm={12} xs={12} className={'alignCenterContent'}>
                        <select  className={'select fullWidth'}>
                            <option value="">Enter Country Code</option>
                            <option data-countryname="USA" value="1">USA (+1)</option>
                            <option data-countryname="UAE" value="971">UAE (+971)</option>
                            <option data-countryname="India" value="91" selected="">India (+91)</option>
                            <option data-countryname="UK" value="44">UK (+44)</option>
                            <option data-countryname="Singapore" value="65">Singapore (+65)</option>
                            <option data-countryname="Egypt" value="20">Egypt (+20)</option>
                            <option data-countryname="Saudi Arabia" value="966">Saudi Arabia (+966)</option>
                            <option data-countryname="Kuwait" value="965">Kuwait (+965)</option>
                            <option data-countryname="Bahrain" value="973">Bahrain (+973)</option>
                            <option data-countryname="Oman" value="968">Oman (+968)</option>
                            <option data-countryname="Hong Kong" value="852">Hong Kong (+852)</option>
                            <optgroup label="Other countries">
                                <option data-countryname="Algeria" value="213">Algeria (+213)</option>
                                <option data-countryname="Andorra" value="376">Andorra (+376)</option>
                                <option data-countryname="Angola" value="244">Angola (+244)</option>
                                <option data-countryname="Anguilla" value="1264">Anguilla (+1264)</option>
                                <option data-countryname="Antigua &amp; Barbuda" value="1268">Antigua &amp; Barbuda (+1268)</option>
                                <option data-countryname="Argentina" value="54">Argentina (+54)</option>
                                <option data-countryname="Armenia" value="374">Armenia (+374)</option>
                                <option data-countryname="Aruba" value="297">Aruba (+297)</option>
                                <option data-countryname="Australia" value="61">Australia (+61)</option>
                                <option data-countryname="Austria" value="43">Austria (+43)</option>
                                <option data-countryname="Azerbaijan" value="994">Azerbaijan (+994)</option>
                                <option data-countryname="Bahamas" value="1242">Bahamas (+1242)</option>
                                <option data-countryname="Bahrain" value="973">Bahrain (+973)</option>
                                <option data-countryname="Bangladesh" value="880">Bangladesh (+880)</option>
                                <option data-countryname="Barbados" value="1246">Barbados (+1246)</option>
                                <option data-countryname="Belarus" value="375">Belarus (+375)</option>
                                <option data-countryname="Belgium" value="32">Belgium (+32)</option>
                                <option data-countryname="Belize" value="501">Belize (+501)</option>
                                <option data-countryname="Benin" value="229">Benin (+229)</option>
                                <option data-countryname="Bermuda" value="1441">Bermuda (+1441)</option>
                                <option data-countryname="Bhutan" value="975">Bhutan (+975)</option>
                                <option data-countryname="Bolivia" value="591">Bolivia (+591)</option>
                                <option data-countryname="Bosnia Herzegovina" value="387">Bosnia Herzegovina (+387)</option>
                                <option data-countryname="Botswana" value="267">Botswana (+267)</option>
                                <option data-countryname="Brazil" value="55">Brazil (+55)</option>
                                <option data-countryname="Brunei" value="673">Brunei (+673)</option>
                                <option data-countryname="Bulgaria" value="359">Bulgaria (+359)</option>
                                <option data-countryname="Burkina Faso" value="226">Burkina Faso (+226)</option>
                                <option data-countryname="Burundi" value="257">Burundi (+257)</option>
                                <option data-countryname="Cambodia" value="855">Cambodia (+855)</option>
                                <option data-countryname="Cameroon" value="237">Cameroon (+237)</option>
                                <option data-countryname="Canada" value="1">Canada (+1)</option>
                                <option data-countryname="Cape Verde Islands" value="238">Cape Verde Islands (+238)</option>
                                <option data-countryname="Cayman Islands" value="1345">Cayman Islands (+1345)</option>
                                <option data-countryname="Central African Republic" value="236">Central African Republic (+236)</option>
                                <option data-countryname="Chile" value="56">Chile (+56)</option>
                                <option data-countryname="China" value="86">China (+86)</option>
                                <option data-countryname="Colombia" value="57">Colombia (+57)</option>
                                <option data-countryname="Comoros" value="269">Comoros (+269)</option>
                                <option data-countryname="Congo" value="242">Congo (+242)</option>
                                <option data-countryname="Cook Islands" value="682">Cook Islands (+682)</option>
                                <option data-countryname="Costa Rica" value="506">Costa Rica (+506)</option>
                                <option data-countryname="Croatia" value="385">Croatia (+385)</option>
                                <option data-countryname="Cuba" value="53">Cuba (+53)</option>
                                <option data-countryname="Cyprus North" value="90392">Cyprus North (+90392)</option>
                                <option data-countryname="Cyprus South" value="357">Cyprus South (+357)</option>
                                <option data-countryname="Czech Republic" value="42">Czech Republic (+42)</option>
                                <option data-countryname="Denmark" value="45">Denmark (+45)</option>
                                <option data-countryname="Djibouti" value="253">Djibouti (+253)</option>
                                <option data-countryname="Dominica" value="1809">Dominica (+1809)</option>
                                <option data-countryname="Dominican Republic" value="1809">Dominican Republic (+1809)</option>
                                <option data-countryname="Ecuador" value="593">Ecuador (+593)</option>
                                <option data-countryname="El Salvador" value="503">El Salvador (+503)</option>
                                <option data-countryname="Equatorial Guinea" value="240">Equatorial Guinea (+240)</option>
                                <option data-countryname="Eritrea" value="291">Eritrea (+291)</option>
                                <option data-countryname="Estonia" value="372">Estonia (+372)</option>
                                <option data-countryname="Ethiopia" value="251">Ethiopia (+251)</option>
                                <option data-countryname="Falkland Islands" value="500">Falkland Islands (+500)</option>
                                <option data-countryname="Faroe Islands" value="298">Faroe Islands (+298)</option>
                                <option data-countryname="Fiji" value="679">Fiji (+679)</option>
                                <option data-countryname="Finland" value="358">Finland (+358)</option>
                                <option data-countryname="France" value="33">France (+33)</option>
                                <option data-countryname="French Guiana" value="594">French Guiana (+594)</option>
                                <option data-countryname="French Polynesia" value="689">French Polynesia (+689)</option>
                                <option data-countryname="Gabon" value="241">Gabon (+241)</option>
                                <option data-countryname="Gambia" value="220">Gambia (+220)</option>
                                <option data-countryname="Georgia" value="7880">Georgia (+7880)</option>
                                <option data-countryname="Germany" value="49">Germany (+49)</option>
                                <option data-countryname="Ghana" value="233">Ghana (+233)</option>
                                <option data-countryname="Gibraltar" value="350">Gibraltar (+350)</option>
                                <option data-countryname="Greece" value="30">Greece (+30)</option>
                                <option data-countryname="Greenland" value="299">Greenland (+299)</option>
                                <option data-countryname="Grenada" value="1473">Grenada (+1473)</option>
                                <option data-countryname="Guadeloupe" value="590">Guadeloupe (+590)</option>
                                <option data-countryname="Guam" value="671">Guam (+671)</option>
                                <option data-countryname="Guatemala" value="502">Guatemala (+502)</option>
                                <option data-countryname="Guinea" value="224">Guinea (+224)</option>
                                <option data-countryname="Guinea - Bissau" value="245">Guinea - Bissau (+245)</option>
                                <option data-countryname="Guyana" value="592">Guyana (+592)</option>
                                <option data-countryname="Haiti" value="509">Haiti (+509)</option>
                                <option data-countryname="Honduras" value="504">Honduras (+504)</option>
                                <option data-countryname="Hungary" value="36">Hungary (+36)</option>
                                <option data-countryname="Iceland" value="354">Iceland (+354)</option>
                                <option data-countryname="Indonesia" value="62">Indonesia (+62)</option>
                                <option data-countryname="Iran" value="98">Iran (+98)</option>
                                <option data-countryname="Iraq" value="964">Iraq (+964)</option>
                                <option data-countryname="Ireland" value="353">Ireland (+353)</option>
                                <option data-countryname="Israel" value="972">Israel (+972)</option>
                                <option data-countryname="Italy" value="39">Italy (+39)</option>
                                <option data-countryname="Jamaica" value="1876">Jamaica (+1876)</option>
                                <option data-countryname="Japan" value="81">Japan (+81)</option>
                                <option data-countryname="Jordan" value="962">Jordan (+962)</option>
                                <option data-countryname="Kazakhstan" value="7">Kazakhstan (+7)</option>
                                <option data-countryname="Kenya" value="254">Kenya (+254)</option>
                                <option data-countryname="Kiribati" value="686">Kiribati (+686)</option>
                                <option data-countryname="Korea North" value="850">Korea North (+850)</option>
                                <option data-countryname="Korea South" value="82">Korea South (+82)</option>
                                <option data-countryname="Kuwait" value="965">Kuwait (+965)</option>
                                <option data-countryname="Kyrgyzstan" value="996">Kyrgyzstan (+996)</option>
                                <option data-countryname="Laos" value="856">Laos (+856)</option>
                                <option data-countryname="Latvia" value="371">Latvia (+371)</option>
                                <option data-countryname="Lebanon" value="961">Lebanon (+961)</option>
                                <option data-countryname="Lesotho" value="266">Lesotho (+266)</option>
                                <option data-countryname="Liberia" value="231">Liberia (+231)</option>
                                <option data-countryname="Libya" value="218">Libya (+218)</option>
                                <option data-countryname="Liechtenstein" value="417">Liechtenstein (+417)</option>
                                <option data-countryname="Lithuania" value="370">Lithuania (+370)</option>
                                <option data-countryname="Luxembourg" value="352">Luxembourg (+352)</option>
                                <option data-countryname="Macao" value="853">Macao (+853)</option>
                                <option data-countryname="Macedonia" value="389">Macedonia (+389)</option>
                                <option data-countryname="Madagascar" value="261">Madagascar (+261)</option>
                                <option data-countryname="Malawi" value="265">Malawi (+265)</option>
                                <option data-countryname="Malaysia" value="60">Malaysia (+60)</option>
                                <option data-countryname="Maldives" value="960">Maldives (+960)</option>
                                <option data-countryname="Mali" value="223">Mali (+223)</option>
                                <option data-countryname="Malta" value="356">Malta (+356)</option>
                                <option data-countryname="Marshall Islands" value="692">Marshall Islands (+692)</option>
                                <option data-countryname="Martinique" value="596">Martinique (+596)</option>
                                <option data-countryname="Mauritania" value="222">Mauritania (+222)</option>
                                <option data-countryname="Mayotte" value="269">Mayotte (+269)</option>
                                <option data-countryname="Mexico" value="52">Mexico (+52)</option>
                                <option data-countryname="Micronesia" value="691">Micronesia (+691)</option>
                                <option data-countryname="Moldova" value="373">Moldova (+373)</option>
                                <option data-countryname="Monaco" value="377">Monaco (+377)</option>
                                <option data-countryname="Mongolia" value="976">Mongolia (+976)</option>
                                <option data-countryname="Montserrat" value="1664">Montserrat (+1664)</option>
                                <option data-countryname="Morocco" value="212">Morocco (+212)</option>
                                <option data-countryname="Mozambique" value="258">Mozambique (+258)</option>
                                <option data-countryname="Myanmar" value="95">Myanmar (+95)</option>
                                <option data-countryname="Namibia" value="264">Namibia (+264)</option>
                                <option data-countryname="Nauru" value="674">Nauru (+674)</option>
                                <option data-countryname="Nepal" value="977">Nepal (+977)</option>
                                <option data-countryname="Netherlands" value="31">Netherlands (+31)</option>
                                <option data-countryname="New Caledonia" value="687">New Caledonia (+687)</option>
                                <option data-countryname="New Zealand" value="64">New Zealand (+64)</option>
                                <option data-countryname="Nicaragua" value="505">Nicaragua (+505)</option>
                                <option data-countryname="Niger" value="227">Niger (+227)</option>
                                <option data-countryname="Nigeria" value="234">Nigeria (+234)</option>
                                <option data-countryname="Niue" value="683">Niue (+683)</option>
                                <option data-countryname="Norfolk Islands" value="672">Norfolk Islands (+672)</option>
                                <option data-countryname="Northern Marianas" value="670">Northern Marianas (+670)</option>
                                <option data-countryname="orway" value="47">Norway (+47)</option>
                                <option data-countryname="Oman" value="968">Oman (+968)</option>
                                <option data-countryname="Palau" value="680">Palau (+680)</option>
                                <option data-countryname="Panama" value="507">Panama (+507)</option>
                                <option data-countryname="Papua New Guinea" value="675">Papua New Guinea (+675)</option>
                                <option data-countryname="Paraguay" value="595">Paraguay (+595)</option>
                                <option data-countryname="Peru" value="51">Peru (+51)</option>
                                <option data-countryname="Philippines" value="63">Philippines (+63)</option>
                                <option data-countryname="Poland" value="48">Poland (+48)</option>
                                <option data-countryname="Portugal" value="351">Portugal (+351)</option>
                                <option data-countryname="Puerto Rico" value="1787">Puerto Rico (+1787)</option>
                                <option data-countryname="Qatar" value="974">Qatar (+974)</option>
                                <option data-countryname="Reunion" value="262">Reunion (+262)</option>
                                <option data-countryname="Romania" value="40">Romania (+40)</option>
                                <option data-countryname="Russia" value="7">Russia (+7)</option>
                                <option data-countryname="Rwanda" value="250">Rwanda (+250)</option>
                                <option data-countryname="San Marino" value="378">San Marino (+378)</option>
                                <option data-countryname="Sao Tome &amp; Principe" value="239">Sao Tome &amp; Principe (+239)</option>
                                <option data-countryname="Saudi Arabia" value="966">Saudi Arabia (+966)</option>
                                <option data-countryname="Senegal" value="221">Senegal (+221)</option>
                                <option data-countryname="Serbia" value="381">Serbia (+381)</option>
                                <option data-countryname="Seychelles" value="248">Seychelles (+248)</option>
                                <option data-countryname="Sierra Leone" value="232">Sierra Leone (+232)</option>
                                <option data-countryname="Slovak Republic" value="421">Slovak Republic (+421)</option>
                                <option data-countryname="Slovenia" value="386">Slovenia (+386)</option>
                                <option data-countryname="Solomon Islands" value="677">Solomon Islands (+677)</option>
                                <option data-countryname="Somalia" value="252">Somalia (+252)</option>
                                <option data-countryname="South Africa" value="27">South Africa (+27)</option>
                                <option data-countryname="Spain" value="34">Spain (+34)</option>
                                <option data-countryname="Sri Lanka" value="94">Sri Lanka (+94)</option>
                                <option data-countryname="St. Helena" value="290">St. Helena (+290)</option>
                                <option data-countryname="St. Kitts" value="1869">St. Kitts (+1869)</option>
                                <option data-countryname="St. Lucia" value="1758">St. Lucia (+1758)</option>
                                <option data-countryname="Sudan" value="249">Sudan (+249)</option>
                                <option data-countryname="Suriname" value="597">Suriname (+597)</option>
                                <option data-countryname="Swaziland" value="268">Swaziland (+268)</option>
                                <option data-countryname="Sweden" value="46">Sweden (+46)</option>
                                <option data-countryname="Switzerland" value="41">Switzerland (+41)</option>
                                <option data-countryname="Syria" value="963">Syria (+963)</option>
                                <option data-countryname="Taiwan" value="886">Taiwan (+886)</option>
                                <option data-countryname="Tajikstan" value="7">Tajikstan (+7)</option>
                                <option data-countryname="Thailand" value="66">Thailand (+66)</option>
                                <option data-countryname="Togo" value="228">Togo (+228)</option>
                                <option data-countryname="Tonga" value="676">Tonga (+676)</option>
                                <option data-countryname="Trinidad &amp; Tobago" value="1868">Trinidad &amp; Tobago (+1868)</option>
                                <option data-countryname="Tunisia" value="216">Tunisia (+216)</option>
                                <option data-countryname="Turkey" value="90">Turkey (+90)</option>
                                <option data-countryname="Turkmenistan" value="7">Turkmenistan (+7)</option>
                                <option data-countryname="Turkmenistan" value="993">Turkmenistan (+993)</option>
                                <option data-countryname="Turks &amp; Caicos Islands" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                <option data-countryname="Tuvalu" value="688">Tuvalu (+688)</option>
                                <option data-countryname="Uganda" value="256">Uganda (+256)</option>
                                <option data-countryname="Uruguay" value="598">Uruguay (+598)</option>
                                <option data-countryname="Uzbekistan" value="7">Uzbekistan (+7)</option>
                                <option data-countryname="Vanuatu" value="678">Vanuatu (+678)</option>
                                <option data-countryname="Vatican City" value="379">Vatican City (+379)</option>
                                <option data-countryname="Venezuela" value="58">Venezuela (+58)</option>
                                <option data-countryname="Vietnam" value="84">Vietnam (+84)</option>
                                <option data-countryname="Virgin Islands - British" value="84">Virgin Islands - British (+1284)</option>
                                <option data-countryname="Virgin Islands - US" value="84">Virgin Islands - US (+1340)</option>
                                <option data-countryname="Wallis &amp; Futuna" value="681">Wallis &amp; Futuna (+681)</option>
                                <option data-countryname="Yemen (North)" value="969">Yemen (North)(+969)</option>
                                <option data-countryname="Yemen (South)" value="967">Yemen (South)(+967)</option>
                                <option data-countryname="Zambia" value="260">Zambia (+260)</option>
                                <option data-countryname="Zimbabwe" value="263">Zimbabwe (+263)</option>
                            </optgroup>
                        </select>

                    </Col>

                    <Col lg={2} md={2} sm={12} xs={12} className={'alignCenterContent'}>
                        <input type={'text'} className={'input fullWidth'} placeholder={'Mobile'}/>
                    </Col>

                    <Col lg={2} md={2} sm={12} xs={12} className={'alignCenterContent'}>
                        <Button className={'sendButton'}><i className={'fa fa-envelope fa-2x'}/>Send</Button>
                    </Col>


                </Row>

            </Container>
        </div>
    )
}

export default EnquireForm;

