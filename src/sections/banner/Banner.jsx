import React, {useState}  from 'react';
import './banner.css'



export default function Banner(props) {
    const {data} = props;
    const [showPopup, setShowPopup] = useState(false);

    return (
        <section id="banner">
            <div className="banner-flex-wrap">
                <div className="left">
                    <p>Adam Hall</p>
                </div>
                <div className="right">
                    <a onClick={() => setShowPopup(!showPopup)}>Socials</a>
                </div> 
            </div>
            {showPopup && (
                <div className="lightbox" onClick={() => setShowPopup(!showPopup)}>
                    <div className="socials-wrap" onClick={(e) => e.stopPropagation()}>
                        <ul className="social">
                            {data.socialLinks &&
                                data.socialLinks.map((item) => {
                                return (
                                <li key={item.name}>
                                    <a href={item.url} target="_blank noopener noreferrer">
                                    <i className={item.className} />
                                    </a>
                                </li>
                            );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    )
}