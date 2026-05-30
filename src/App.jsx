import { useState } from 'react'
import logo from "./assets/logo.png";

function App() {

  return (
    <>
    <div className="poster">

    <div className="top">

        <div className="row align-items-center">

            <div className="col-lg-5">

                <div className="logo-side">
            <img src={logo} alt="Aarambh Logo" className="main-logo"/>

            <div className="small-links">
                GOVT SCHEMES • SERVICES • EDUCATION FORMS • JOBS • CAREER GUIDANCE
            </div>
        </div>

            </div>

            <div className="col-lg-7">

                <div className="hero-text">

                    <div className="hero-line"></div>

                    <h1>
                        WE <span>SIMPLIFY</span><br/>
                        YOU <span>SUCCEED</span>
                    </h1>

                    <div className="hero-line"></div>

                    <div className="subtitle">
                        One Stop Solution for<br/>
                        All Your <span>Government &<br/>Document</span> Related Services
                    </div>

                </div>

            </div>

        </div>

    </div>

    <div className="menu-icons container-fluid">

        <div className="row justify-content-center g-4">

            <div className="col-6 col-md-2">
                <div className="icon-box">
                    <div className="circle"><i className="fa-solid fa-building-columns"></i></div>
                    <p>GOVT<br/>SCHEMES</p>
                </div>
            </div>

            <div className="col-6 col-md-2">
                <div className="icon-box">
                    <div className="circle"><i className="fa-solid fa-users"></i></div>
                    <p>SERVICES</p>
                </div>
            </div>

            <div className="col-6 col-md-2">
                <div className="icon-box">
                    <div className="circle"><i className="fa-solid fa-file-lines"></i></div>
                    <p>EDUCATION<br/>FORMS</p>
                </div>
            </div>

            <div className="col-6 col-md-2">
                <div className="icon-box">
                    <div className="circle"><i className="fa-solid fa-briefcase"></i></div>
                    <p>JOBS</p>
                </div>
            </div>

            <div className="col-6 col-md-2">
                <div className="icon-box">
                    <div className="circle"><i className="fa-solid fa-location-dot"></i></div>
                    <p>CAREER<br/>GUIDANCE</p>
                </div>
            </div>

        </div>

    </div>

    <div className="section-title">
        OUR SERVICES
    </div>

    <div className="services-wrapper">

        <div className="services-box">

            <div className="row">

                <div className="col-lg-6 service-divider">

                    <div className="service-item">
                        <div className="service-icon">🪪</div>
                        <div className="number">1</div>
                        <div className="service-text">Aadhar Address Update</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">💳</div>
                        <div className="number">2</div>
                        <div className="service-text">New Pan Card / Pan Card Correction</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🗳️</div>
                        <div className="number">3</div>
                        <div className="service-text">New Voter Card / Correction in Voter</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">📘</div>
                        <div className="number">4</div>
                        <div className="service-text">New Passport / Passport Renewal</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">GST</div>
                        <div className="number">5</div>
                        <div className="service-text">GST Registration</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🏢</div>
                        <div className="number">6</div>
                        <div className="service-text">Udyam Registration</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🚘</div>
                        <div className="number">7</div>
                        <div className="service-text">HSRP Number Plate</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🎫</div>
                        <div className="number">8</div>
                        <div className="service-text">HSRP Colour Sticker</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🔗</div>
                        <div className="number">9</div>
                        <div className="service-text">Aadhar NPCI Link</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🔗</div>
                        <div className="number">10</div>
                        <div className="service-text">Aadhar Pan Link</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🏥</div>
                        <div className="number">11</div>
                        <div className="service-text">ABHA Service</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🌿</div>
                        <div className="number">12</div>
                        <div className="service-text">Ayushman Service</div>
                    </div>

                </div>

                <div className="col-lg-6">

                    <div className="service-item">
                        <div className="service-icon">👷</div>
                        <div className="number">13</div>
                        <div className="service-text">Eshram Card</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🚦</div>
                        <div className="number">14</div>
                        <div className="service-text">Learning License</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🪪</div>
                        <div className="number">15</div>
                        <div className="service-text">Driving License Related Service</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🌍</div>
                        <div className="number">16</div>
                        <div className="service-text">FTI TTP</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🍴</div>
                        <div className="number">17</div>
                        <div className="service-text">Food License / Renewal of Food License</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🚘</div>
                        <div className="number">18</div>
                        <div className="service-text">RC Aadhar Link</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🪪</div>
                        <div className="number">19</div>
                        <div className="service-text">Aadhar PVC Card</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">🏦</div>
                        <div className="number">20</div>
                        <div className="service-text">UAN Activation</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">👥</div>
                        <div className="number">21</div>
                        <div className="service-text">PF Nomination</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">₹</div>
                        <div className="number">22</div>
                        <div className="service-text">PF Withdrawal</div>
                    </div>

                    <div className="service-item">
                        <div className="service-icon">💰</div>
                        <div className="number">23</div>
                        <div className="service-text">Atal Pension Yojana</div>
                    </div>

                </div>

            </div>

        </div>

    </div>

    <div className="assist">

        <div className="assist-box-wrapper">

            <div className="assist-title">
                ADDITIONAL ASSISTANCE
            </div>

            <div className="row text-center gy-4">

                <div className="col-6 col-lg-2">
                    <div className="assist-item">
                        <div className="assist-icon"><i className="fa-solid fa-file-pen"></i></div>
                        Online Form Filling
                    </div>
                </div>

                <div className="col-6 col-lg-2">
                    <div className="assist-item">
                        <div className="assist-icon"><i className="fa-solid fa-folder"></i></div>
                        Document Guidance
                    </div>
                </div>

                <div className="col-6 col-lg-2">
                    <div className="assist-item">
                        <div className="assist-icon"><i className="fa-solid fa-location-crosshairs"></i></div>
                        Application Tracking
                    </div>
                </div>

                <div className="col-6 col-lg-2">
                    <div className="assist-item">
                        <div className="assist-icon"><i className="fa-regular fa-bell"></i></div>
                        Status Updates
                    </div>
                </div>

                <div className="col-6 col-lg-2">
                    <div className="assist-item">
                        <div className="assist-icon"><i className="fa-solid fa-headset"></i></div>
                        Problem Resolution
                    </div>
                </div>

                <div className="col-6 col-lg-2">
                    <div className="assist-item">
                        <div className="assist-icon"><i className="fa-solid fa-user-tie"></i></div>
                        Expert Support
                    </div>
                </div>

            </div>

        </div>

    </div>

    <div className="why">

        <h2>WHY CHOOSE AARAMBH?</h2>

        <div className="row gy-4">

            <div className="col-6 col-lg-2">
                <div className="why-item">
                    <div className="why-icon"><i className="fa-solid fa-shield-halved"></i></div>
                    <div className="why-text">100% Reliable & Transparent Process</div>
                </div>
            </div>

            <div className="col-6 col-lg-2">
                <div className="why-item">
                    <div className="why-icon"><i className="fa-solid fa-users"></i></div>
                    <div className="why-text">Expert & Experienced Team</div>
                </div>
            </div>

            <div className="col-6 col-lg-2">
                <div className="why-item">
                    <div className="why-icon"><i className="fa-regular fa-clock"></i></div>
                    <div className="why-text">Timely Updates & Follow-up</div>
                </div>
            </div>

            <div className="col-6 col-lg-2">
                <div className="why-item">
                    <div className="why-icon"><i className="fa-solid fa-lock"></i></div>
                    <div className="why-text">Safe & Secure Your Documents</div>
                </div>
            </div>

            <div className="col-6 col-lg-2">
                <div className="why-item">
                    <div className="why-icon"><i className="fa-solid fa-headset"></i></div>
                    <div className="why-text">Support Until You Get Your Service</div>
                </div>
            </div>

            <div className="col-6 col-lg-2">
                <div className="why-item">
                    <div className="why-icon"><i className="fa-solid fa-map"></i></div>
                    <div className="why-text">All Over India We are Available</div>
                </div>
            </div>

        </div>

    </div>


    <div className="contact">

        <div className="contact-title">
            CONTACT US
        </div>

        <div className="contact-box">

            <div className="row g-4">

                <div className="col-lg-6">

                    <div className="contact-left">

                        <div className="d-flex align-items-start gap-4">

                            <div className="phone-icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>

                            <div className="w-100">

                                <div className="person">
                                    <span>Monika Latwal</span>
                                    <span>7505541166</span>
                                </div>

                                <div className="person">
                                    <span>Sudhir Hiraskar</span>
                                    <span>8262004711</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="col-lg-6">

                    <div className="contact-right">

                        <div className="support-icon">
                            <i className="fa-solid fa-headset"></i>
                        </div>

                        <div className="support-text">
                            Your Work, Our Responsibility<br/>
                            We are here to help you at every step.
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>



    <div className="footer">

        <div>
            <i className="fa-solid fa-location-dot"></i>
            All Over India
        </div>

        <div>
            Sahi Jankari, <span>Sahi Salah</span>, Sahi Samadhan
        </div>

        <div>
            <i className="fa-solid fa-circle-check"></i>
            Always at Your Service
        </div>

    </div>

</div>
    </>
  )
}

export default App
