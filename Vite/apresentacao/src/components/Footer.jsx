import React from "react";
import '../App.css';

function Footer(){
    return (
        <>
            <h3>Acesse minhas redes sociais</h3>
            <div class="redes-sociais">    
                <a href="https://www.instagram.com/andreodonn/" rel="noopener noreferrer"><img src="img/logo-insta.png" alt="Logo do instagram em efeito negativo" width="3%"/></a>

                <a href="https://www.linkedin.com/in/andreodon/" rel="noopener noreferrer"><img src="img/logo-linkedin.png" alt="Logo do instagram em efeito negativo" width="3%"/></a>

                <a href="mailto:andreodon@gmail.com?subject=Vim de seu site" target="_blank"><img src="img/logo-gmail.png" alt="Logo do instagram em efeito negativo" width="3%"/></a>
            </div>

            <h4>Entre em contato comigo</h4>
                [FAZER O FORMULÁRIO]

                <p>
                    Copyright&copy; 2024<br/>
                    Todos os direitos reservados
                </p>
        </>
    )
}

export default Footer;