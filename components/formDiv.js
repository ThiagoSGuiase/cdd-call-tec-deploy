// import { useForm } from "react-hook-form";
import { useState } from 'react';
// import axios from "axios";
import ReactPlayer from 'react-player';
import router, { useRouter } from "next/router";

import styles from '../styles/Form.module.css';
// import cover from '../assets/banner-home.jpg';

export default function Form() {
  // const { register, handleSubmit, reset } =  useForm();
  // const [ loading, setLoading ] = useState(false);
  async function handleOnSubmit(e){
    e.preventDefault();
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
        {/* <form onSubmit={sendEmail} className={styles.formDiv} id='form'>
          <h1>Informe os dados para consultar a viabilidade na sua região</h1>
          <div className={styles.formContainer}>
            <label htmlFor="name" className={styles.hiddenLabel}>
              Nome
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Nome (obrigatório)"
              required
            />
            <label htmlFor="phone" className={styles.hiddenLabel}>
              Telefone
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="Telefone (obrigatório)"
              required
            />
            <label htmlFor="email" className={styles.hiddenLabel}>
              E-mail
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="E-mail (obrigatório)"
              required
            />
            <label htmlFor="address" className={styles.hiddenLabel}>
              Endereço
            </label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Endereço (obrigatório)"
            />
            <label htmlFor="addressNumber" className={styles.hiddenLabel}>
              Número
            </label>
            <input
              id="addressNumber"
              type="text"
              name="addressNumber"
              placeholder="Número (obrigatório)"
              required
            />
            <label htmlFor="city" className={styles.hiddenLabel}>
              Cidade
            </label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="Cidade (obrigatório)"
              required
            />
          </div>
          <button type="submit">Enviar</button>
          { loading ? (
          <div className="loading">
            <span>Enviando...</span>
            <div className="spinner"></div>
          </div>
          ) : ''}              
        </form>         */}
        < form className={styles.main} method="post" onSubmit={handleOnSubmit}>
            < label htmlFor='name'>Name:</label>
            < input type='text' name='name' className={styles.inputField} />

            < label htmlFor='email'>Email:</label>
            < input type='email' name='email' className={styles.inputField} />

            < label htmlFor='message'>Message</label>
            < input type='text' name='message' className={styles.inputField} />

          < input type='submit'/>
          </form >
      </div>
    </div>    
  )
};