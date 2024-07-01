import styles from './SobreMim.module.css';

import PostModelo from 'Componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/minha_foto.jpg';
export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Iarley</h3>
      <img src={fotoSobreMim} alt="Foto do Iarley" className={styles.fotoSobreMim} />
      <p className={styles.paragrafo}>
        Olá, tudo bem? Eu sou um desenvolvedor front-end que busca uma oportunidade de aplicar seus conhecimentos.
      </p>
      <p className={styles.paragrafo}>
        Meu interesse por programação surgiu ainda no ensino fundamental, onde minha escola na época sugeriu aos alunos que procurassem fazer cursos gratuitos na plataforma da Udemy. Na minha procura por cursos de computação, vi um de introdução a programação de computadores, neste curso pequeno aprendi o básico de Python, mas sem aprofundamento  
      </p>
      <p className={styles.paragrafo}>
        No ensino superior, escolhi a cursar Análise e Desenvolvimento de Sistemas na Faculdade CDL, em Fortaleza - CE. Durante o curso, aprendi sobre lpgica de programação e conheci linguagens como C, Java, Python e sobre desenvolvimento web com HTML, CSS e JavaScript.
      </p>
      <p className={styles.paragrafo}>
        Depois de me formar decidi continuar estudando sobre desenvolvimento para front-end com frameworks como Angular e o React, ao mesmo tempo em que procurava por vagas no mercado.
      </p>
      <p className={styles.paragrafo}>
        
      </p>
      <p className={styles.paragrafo}>
        
      </p>
    </PostModelo>
  );
}