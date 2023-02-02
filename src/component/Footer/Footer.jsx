import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className="footer-block">
      <footer>
        <div className='footer-flex'>
          <div className='footer-info_0'>
            <ul>
              <li>О Компании</li>
              <li>FAQ</li>
              <li>Отзывы ★</li>
              <li>Новости</li>
            </ul>
          </div>
        <div className='footer-info_1'>
                <div className='footer-new_text'>
              <h5>Следите за нашими новостями</h5>
              <input type="text" placeholder='ваш @mail'/>
              <h5 id='contact'>контакты ☎</h5>
              <p style={{fontSize: "15px", marginTop: "-19px"}}>+996 701 353 581</p>
              </div>
            </div>
          <div className='footer-info_2'>
            <div className='footer-social_text'>
            <h5>соц.сети</h5>
            </div>
            <div className='footer-social_img'>
              <div id='insta'>
            <a href="">
              <img  src="https://cdn-icons-png.flaticon.com/512/87/87390.png" style={{width: "17px"}} alt="" />
            </a>
            </div>
            <a href="">
              <img src="https://cdn-icons-png.flaticon.com/512/48/48968.png" style={{width: "17px"}}  alt="" />
              </a>
            <a href="">
              <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" style={{width: "17px"}} alt="" />
              </a>
            </div>
            <div className='license'>
              <p>Copyright 2023 © <strong>The Planet Traveller</strong></p>
            </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer