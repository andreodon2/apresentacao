import React from "react";
import '../App.css';
import LogoInsta from '../assets/logo-insta.png'
import LogoLinkedin from '../assets/logo-linkedin.png'
import LogoGmail from '../assets/logo-gmail.png'

function Footer(){
    return (
        <>
            <h3>Acesse minhas redes sociais</h3>
            <div class="redes-sociais">    
                <a href="https://www.instagram.com/andreodonn/" rel="noopener noreferrer"><img src={LogoInsta} alt="Logo do instagram em efeito negativo" width="3%"/></a>

                <a href="https://www.linkedin.com/in/andreodon/" rel="noopener noreferrer"><img src={LogoLinkedin} alt="Logo do instagram em efeito negativo" width="3%"/></a>

                <a href="mailto:andreodon@gmail.com?subject=Vim de seu site" target="_blank"><img src={LogoGmail} alt="Logo do instagram em efeito negativo" width="3%"/></a>
            </div>

            <h4>Entre em contato comigo</h4>
                <form>
                    <strong>Nome: </strong><input type="text" name="nome" id="nome" placeholder="Escreva seu nome"/><br/>

                    <strong>Email: </strong><input type="email" name="email" id="email" placeholder="seuemail@email.com.br"/>

                    <h4>Esvreva sua mensagem</h4>
                    <textarea rows="8" cols="40" id="msg">
                        
                    </textarea><br/>
                    <input class="botao" type="onSubmit" onclick="enviarFormulario()"/>
                </form>
                [FAZER O FORMULÁRIO]

                <p>
                    Copyright&copy; 2024<br/>
                    Todos os direitos reservados
                </p>
        </>
    )
}

export default Footer;