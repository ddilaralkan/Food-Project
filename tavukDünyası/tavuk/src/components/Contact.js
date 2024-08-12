import React from 'react'
import ContactImg from '../assets/contact.jpg'
import ContactStyles from '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${ContactImg})`, marginBottom:'10px'}}></div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type='text' name='name' placeholder='Lütfen Adınızı Soyadınızı Giriniz' />

          <label>E-Mail</label>
          <input type='email' name='email' placeholder='Lütfen E-Mail Giriniz' /> 

          <label>Mesajınız</label>
          <textarea rows="6" name='message' placeholder='Lütfen Mesajınızı Giriniz' />   
          <button>Gönder</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
