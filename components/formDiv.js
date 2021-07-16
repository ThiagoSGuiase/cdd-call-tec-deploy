import { useState } from 'react';
import ReactPlayer from 'react-player';
import router, { useRouter } from "next/router";

import styles from '../styles/Form.module.css';

export default function Form() {
  const [ loading, setLoading ] = useState(false);
  async function handleOnSubmit(e){
    e.preventDefault();
    setLoading(true);
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    await fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    router.push('/obrigado')

    console.log(formData);
  }
    
  return (
    <div className={styles.form}>
      <div className={styles.formCont}>
        <div className={styles.formVideo}>
          <ReactPlayer
            className='reactPlayer'
            width='100%'
            height='100%'
            controls
            playing
            url='https://guiase.s3.amazonaws.com/wp-content/uploads/sites/1997/2021/07/cdd-video.mp4'
            light='https://i.ibb.co/Vx6LnVp/thumbnail.png'
          />
        </div>
        < form className={styles.formDiv} id='form' method="post" onSubmit={handleOnSubmit}>
          <h1>Informe os dados para consultar a viabilidade na sua região</h1>
          <div className={styles.formContainer}>
            < label htmlFor='name' className={styles.hiddenLabel}>Name:</label>
            < input type='text' name='name' className={styles.inputField} placeholder="Nome (obrigatório)" required />

            < label htmlFor='phone' className={styles.hiddenLabel}>Telefone:</label>
            < input type='phone' name='phone' className={styles.inputField} placeholder="Telefone (obrigatório)" required />

            < label htmlFor='email' className={styles.hiddenLabel}>Email:</label>
            < input type='email' name='email' className={styles.inputField} placeholder="E-mail (obrigatório)" required />

            < label htmlFor='address' className={styles.hiddenLabel}>Endereço</label>
            < input type='text' name='address' className={styles.inputField} placeholder="Endereço (obrigatório)" required />

            < label htmlFor='addressNumber' className={styles.hiddenLabel}>Número</label>
            < input type='text' name='addressNumber' className={styles.inputField} placeholder="Número (obrigatório)" required />

            < label htmlFor='city' className={styles.hiddenLabel}>Cidade</label>
            < input type='text' name='city' className={styles.inputField} placeholder="Cidade (obrigatório)" required />

            <button type="submit">Enviar</button>
            { loading ? (
            <div className="loading">
              <span>Enviando...</span>
              <div className="spinner"></div>
            </div>
            ) : ''}
          </div>
          </form >
      </div>
    </div>    
  )
};