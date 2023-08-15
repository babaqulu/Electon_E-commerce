import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <div className='footerWrapper'>

      <div className='footerUpperSide'>

        <h1 className='footerSubscribe'>Subscribe newsletter</h1>

      <div className='footerEmail' >

      <input type="email" name="email" placeholder="Email adress" />
      <button><img src={require('../../img/send.png')}/></button>

      </div>

      <div className='callUs'>

        <img src={require('../../img/headphoneIcon.png')} />

        <p>Call us 24/7 :<br/>(+62) 0123 567 789</p>

      </div>

      </div>

      <div className='footerBottomSide'>

        <div className='logoInfo'>

          <img src={require('../../img/logoBlue.png')}/>

          <p>64 st james boulevard <br/> hoswick , ze2 7zj</p>

          <div className='footerIconsWrapper'>

            <div className='footerLine'></div>

            <div className='footerIconsContainer'>

            <img src={require('../../img/google.png')}/>
            <img src={require('../../img/facebook.png')}/>
            <img src={require('../../img/whatsapp.png')}/>

            </div>

          </div>

        </div>

        <div className='footerLinkLists'>

          <ul className='footerFindProduct'>

          <h1>Find product</h1>
            <li>
              <a href="#">Brownze arnold</a>
            </li>
            <li>
              <a href="#">Chronograph blue</a>
              </li>
            <li>
              <a href="#">Smart phones</a>
              </li>
            <li>
              <a href="#">Automatic watch</a>
              </li>
            <li>
              <a href="#">Hair straighteners</a>
              </li>

          </ul>

          <ul className='footerGetHelp'>

          <h1>Get help</h1>
          <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
              </li>
            <li>
              <a href="#">Return policy</a>
              </li>
            <li>
              <a href="#">Privacy policy</a>
              </li>
            <li>
              <a href="#">Payment policy</a>
              </li>

          </ul>

          <ul className='footerAboutUs'>

            <h1>About us</h1>
          <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Service</a>
              </li>
            <li>
              <a href="#">Our policy</a>
              </li>
            <li>
              <a href="#">Custmer care</a>
              </li>
            <li>
              <a href="#">Faq’s</a>
              </li>

          </ul>

        </div>

      </div>
      
    </div>
  )
}
