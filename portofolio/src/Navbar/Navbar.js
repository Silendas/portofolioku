import React from 'react';
import './Navbar.css';
import { BsPersonCircle, BsFillChatDotsFill, BsArchiveFill } from 'react-icons/bs';

export default function Navbar() {
  return (
    <div className='navBar d-block text-center'>
        <div id='btn-bio' onClick={bio} className='click'><BsPersonCircle /></div>
        <div id='btn-info' onClick={info} className='lbl mt-2'><BsFillChatDotsFill /></div>
        <div id='btn-project' onClick={project} className='lbl mt-2'><BsArchiveFill /></div>
    </div>
  )
}

function Start(){
  window.scrollTo(0,0);
  document.getElementById('info').style.display = "none";
  document.getElementById('bio').style.display = "none";
  document.getElementById('project').style.display = "none";
  document.getElementById('btn-bio').className = "lbl";
  document.getElementById('btn-info').className= "lbl mt-2 ";
  document.getElementById('btn-project').className= "lbl mt-2 ";
}

function bio(){
  Start()
  document.getElementById('bio').style.display = "inline";
  document.getElementById('btn-bio').className = "click";
}  

function info(){
  Start()
  document.getElementById('info').style.display = "inline";
  document.getElementById('btn-info').className = "click mt-2";
}

function project(){
  Start()
  document.getElementById('project').style.display = "inline";
  document.getElementById('btn-project').className = "click mt-2";
}