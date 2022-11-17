import React from 'react';
import './Bio.css';

export default function Bio() {

  return (
    <div id='bio' className='content p-4 text-center text-white'>
        <div className='header-text'>
            Muhamad Yasmin Nul Hakim
        </div>
        <div className='img-profile d-flex'><div className='img-diri'></div></div>
        <div className='about-me'>
          I want to be a Web Developer and Android Developer. <br/>
          I use React for Web Developer and Ionic for Android Developer. 
        </div>
        <div className='header-text mt-5'>Skills</div>
        <div className='my-skills d-flex'>
          <div className='d-block'>
            <div className='img-vb' src='' alt=''></div>
            <div className='pt-2'>VB.NET</div>
          </div>
          <div className='d-block'>
            <div className='img-react' src='' alt=''></div>
            <div className='pt-2'>React.JS</div>
          </div>
          <div className='d-block'>
            <div className='img-ionic' src='' alt=''></div>
            <div className='pt-2'>Ionic</div>
          </div>
          <div className='d-block'>
            <div className='img-mysql' src='' alt=''></div>
            <div className='pt-2'>MySQL</div>
          </div>
          <div className='d-block'>
            <div className='img-node' src='' alt=''></div>
            <div className='pt-2'>Node.JS</div>
          </div>
        </div>
        <div id='ketSkill' className='ket-skill-before text-start mt-5'>
          <div>
            <div className='ket-header'>React.JS</div>
            <div className='bar mt-2 text-center'>
              <div className='presentase-react'><div className='present-txt'>50%</div></div>
            </div>
          </div>

          <div>
            <div className='ket-header mt-4'>Node.JS</div>
            <div className='bar mt-2 text-center'>
              <div className='presentase-node'><div className='present-txt'>40%</div></div>
            </div>
          </div>

          <div>
            <div className='ket-header mt-4'>Ionic</div>
            <div className='bar mt-2 text-center'>
              <div className='presentase-ionic'><div className='present-txt'>50%</div></div>
            </div>
          </div>

          <div>
            <div className='ket-header mt-4'>VB.NET</div>
            <div className='bar mt-2 text-center'>
              <div className='presentase-vb'><div className='present-txt'>40%</div></div>
            </div>
          </div>

          <div>
            <div className='ket-header mt-4'>MySQL</div>
            <div className='bar mt-2 text-center'>
              <div className='presentase-mysql'><div className='present-txt'>60%</div></div>
            </div>
          </div>
        </div>
    </div>
  )
}

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 200) {
    document.getElementById("ketSkill").className = "ket-skill-after text-start mt-5";
  }
  if (document.documentElement.scrollTop < 50) {
    document.getElementById("ketSkill").className = "ket-skill-before text-start mt-5";
  }
}
