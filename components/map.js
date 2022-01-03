import styles from '../styles/Map.module.css';

export const Map = () => {
  return (
    <div className={styles.mapCont}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.940013085665!2d-51.16003408448027!3d-23.317935158534176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb43676f1e853b%3A0xdfce430ea5e5f0c1!2sR.%20Sen.%20Souza%20Naves%2C%20626%20-%20Centro%2C%20Londrina%20-%20PR%2C%2086010-160!5e0!3m2!1spt-BR!2sbr!4v1641196459428!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    </div>
  )
}