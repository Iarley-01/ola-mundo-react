import { useNavigate } from 'react-router-dom';

import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/erro_404.png';

import BotaoPrincipal from 'Componentes/BotaoPrincipal';

export default function NaoEncontrada() {
  const navegacao = useNavigate();
  
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Opa! Página não Encontrada</h1>
        <p className={styles.paragrafo}>Tem certeza de que era isso que você estava procurando?</p>
        <p className={styles.paragrafo}>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
        <div 
          className={styles.botaoContainer}
          onClick={() => navegacao(-1)}
        >
          <BotaoPrincipal 
            tamanho="lg"
          >
            Voltar
          </BotaoPrincipal>
        </div>
        <img 
          className={styles.imagemCachorro}
          src={erro404}
          alt="Imagem do cachorro de óculos"
        />
      </div>
      <div className={styles.espacoEmBranco}>
        
      </div>
    </>
  );
}
