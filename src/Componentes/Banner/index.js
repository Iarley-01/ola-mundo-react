import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.jpg';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>Olá, seja bem vindo ao meu espaço pessoal. Eu sou Iarley Alves, desenvolvedor front-end, aqui compartilho algumas coisas que gosto pessoalmente</p>
      </div>
      <div className={styles.imagens}>
        <img 
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="Círculo Colorido"
        />
        <img 
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Iarley Alves"
        />
      </div>
    </div>
  );
} 