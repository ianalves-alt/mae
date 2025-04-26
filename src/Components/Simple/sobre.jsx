import style from "@/Styles/modules/sobreIntro.module.css";
import Rapha from "./Rapha.jsx";

import { FaTwitter, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import Image from "next/image";
export default function SobreIntro() {
  const year = new Date().getFullYear();
  return (
    <>
      <div>
        <div className={style.container}>
          <h1 className={style.title}>Sobre nosso blog</h1>
          <p className={style.texto}>
            Esse blog nasceu da vontade de compartilhar conteúdo que realmente
            faz sentido. Aqui a gente fala de bem-estar, movimento, mente e
            rotina de um jeito simples, sem enrolação. Nada de fórmulas mágicas
            ou promessas vazias — só reflexões reais, dicas práticas e histórias
            que inspiram. Queremos que cada post te ajude a pensar, mudar, ou
            pelo menos te faça companhia num café. Sinta-se em casa.
          </p>
        </div>
        <div>
          <Rapha text={"Quem Criou"} />
        </div>
        <div className={`${style.container} ${style.containerF}`}>
          <div>
            <h1 className={style.title3}>
              Sessoes particulares de <div>pilates e fisioterapia</div>
            </h1>
            <p className={style.texto3}>
              Aulas Particulares <strong>Residenciais</strong> profissionais Com
              Raphaela alves por apenas valor fixo, faca semanalmente com ela,
              ela e muito legal e possuem varios benefissios, faca com ela
              agora, esses sao os beneficios.
            </p>
          </div>

          <div className={style.containerBenef}>
            <div className={style.benefWrap}>
              <h2 className={style.beneficios}>Beneficios do Pilates</h2>
              <ul className={style.beneficiosUl}>
                <li>bem estar fisico e mental</li>
                <li>alivio de dores</li>
                <li>forca</li>
                <li>flexibilidade</li>
                <li>cordenacao motora</li>
                <li>prevencao de lesoes</li>
                <li>melhora tensao</li>
                <li>melhora qualidade de vida</li>
                <li>fortalecimento global</li>
                <li>entre muito mais</li>
              </ul>
            </div>
            <h2 className={style.contato}>
              Contato:
              <div>
                {" "}
                <FaWhatsapp className={style.whatsapp} />{" "}
                <span>81 9 9779-1315</span>
              </div>
            </h2>
          </div>
        </div>
        <div className={style.container}>
          <h1 className={style.title3}>Site</h1>
          <div>Site feito por Ian Alves|©{year}todos direitos reservados </div>
          <div>
            Contato:{" "}
            <div className={style.contatos}>
              <div>ianalvesvalongo2008@gmail.com</div> <div>ianalves_alt</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
