import React from 'react';
import './footer.css'
export default function Footer (props) {
  const { data } = props;
  return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {
                data.socialLinks && data.socialLinks.map((item)=>{
                  return(
                      <li>
                        <a href={item.url}>
                          <i className={item.className} />
                        </a>
                      </li>
                  )
                })
              }
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#banner"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
  );

}