import React from 'react';

import Contato from './img/Icones/contato.png';
import Email from './img/Icones/email.png';
import Facebook from './img/Icones/facebook.png';
import Instagram from './img/Icones/instagram.png';
import Linkedin from './img/Icones/linkedin.png';
import Localizacao from './img/Icones/localizacao.png';
import Servicos from './img/Icones/servicos.png';
import Website from './img/Icones/website.png';
import Whatsapp from './img/Icones/whatsapp.png';

import Logo from './img/Icones/logo2.png';

import Telefone from './img/Icones/telefone.png';



import './App.css';

import Icone from './components/Icone'
function App() {
  return (
    <div className="container1">
      <div className="box" >

        <div className="row">
            <div className="col-12">
              <div className="logo">
                <img src={Logo} alt=""/>
              </div>
            </div>

        </div>

        <div className="row">
          <div className="col-4 d-flex d-flex justify-content-center">
            <Icone Text={"CONTATO"} Icon={Contato}/>
          </div>
          <div className="col-4">
            <Icone Text={"E-MAIL"} Icon={Email}/>
          </div>
          <div className="col-4">
          <Icone Text={"WHATSAPP"} Icon={Whatsapp}/>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <Icone Text={"NOSSOS SERVIÇOS"} Icon={Servicos}/>
          </div>
          <div className="col-4 text-center">
            <a href="">
              <div className="div-tel">
                <img className="Telefone" src={Telefone} alt=""/>
              </div>
            </a>
            <p>TELEFONE</p>
          </div>
          <div className="col-4">
            <Icone Text={"INSTRAGRAM"} Icon={Instagram}/>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <Icone Text={"WEBSITE"} Icon={Website}/>
          </div>
          <div className="col-4">
          <Icone Text={"LINKEDIN"} Icon={Linkedin}/>

          </div>
          <div className="col-4">
            <Icone Text={"FACEBOOK"} Icon={Facebook}/>
          </div>
        </div>

        <div className="row">
          <div className="col-4">

          </div>
          <div className="col-4">
            <Icone Text={"LOCALIZAÇÃO"} Icon={Localizacao}/>
          </div>
          <div className="col-4">

          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
