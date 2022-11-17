import React from 'react';
import './Info.css';
import {AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai';
import {HiOutlineLocationMarker} from 'react-icons/hi';

export default function Info() {
  return (
    <div id='info' className='content p-4 text-center text-white'>
        <div className='header-text'>
            Info
        </div>
        <div className='txt-bio mt-4 mb-4'>
            <p>
              Hi, I'm Muhamad Yasmin Nul Hakim,
              <br/>
              I'm 20 years old and I'm very interested in programming.
            </p>
        </div>
        <div className='contact-me text-start mt-5'>
          <div className='d-flex'>
            <div className='logo'>
               <HiOutlineLocationMarker />
            </div>
            <div className='ms-2 txt-ket'>
               Indonesia, Bogor
            </div>
          </div>
          <div className='d-flex mt-5'>
            <div className='logo'>
               <AiFillLinkedin />
            </div>
            <div className='ms-2 txt-ket'>
               <a href='https://www.linkedin.com/in/muhamad-yasmin-nul-hakim-941897251' target="_blank">Muhamad Yasmin Nul Hakim</a>
            </div>
          </div>
          <div className='d-flex mt-2'>
            <div className='logo'>
               <AiFillGithub />
            </div>
            <div className='ms-2 txt-ket'>
               <a href='https://github.com/Silendas' target="_blank">Silendas</a>
            </div>
          </div>
          <div className='d-flex mt-2'>
            <div className='logo'>
               <AiOutlineWhatsApp />
            </div>
            <div className='ms-2 txt-ket'>
               <a href='https://wa.me/6285158553802' target="_blank">Muhamad Yasmin Nul Hakim</a>
            </div>
          </div>
        </div>
    </div>
  )
}
