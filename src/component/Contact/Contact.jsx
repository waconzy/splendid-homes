import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

function Contact() {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy To Contact Us</span>
                <span className='secondaryText'>We Are Always Ready To Help You By Providing The Best
                 Services For You. <br /> We Believe a Good Place To Live Can Make Your life Better. </span>

                 <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColStart mode">
                            <div className="flexColStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>012 123 123 12</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>

                        <div className="flexColStart mode">
                            <div className="flexColStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>012 123 123 12</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chat Now
                            </div>
                        </div>
                    </div>
                    <div className="flexStart row">
                        <div className="flexColStart mode">
                            <div className="flexColStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>012 123 123 12</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>

                        <div className="flexColStart mode">
                            <div className="flexColStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>012 123 123 12</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Message Now
                            </div>
                        </div>
                    </div>


                 </div>

            </div>
            <div className="flexCenter c-right">
                <div className="image-container">
                <img src="./house1lg.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact