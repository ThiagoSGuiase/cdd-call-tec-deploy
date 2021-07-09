import { useForm } from "react-hook-form";
import { useState } from 'react';
import axios from "axios";
import ReactPlayer from 'react-player';
import router, { useRouter } from "next/router";

import styles from '../styles/Form.module.css';
import cover from '../assets/banner-home.jpg';

export default function Form() {
  const { register, handleSubmit, reset } =  useForm();
  const [ loading, setLoading ] = useState(false);

  async function onSubmitForm(values){
    let config = {
      method: 'post',
      // url: '/api/contact',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };
    
    try {
      const response = await axios(config);
      console.log(response)
      if(response.status == 200) {
        reset();
        router.push('/obrigado')
      }
    } catch (err) {
      console.error(err);
    }

  }
  // function handleSubmit(){
  //   setLoading(true);
  // }
  
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
        <form onSubmit={handleSubmit(onSubmitForm)} className={styles.formDiv} id='form'>
          <h1>Informe os dados para consultar a viabilidade na sua região</h1>
          <div className={styles.formContainer}>
            <label htmlFor="name" className={styles.hiddenLabel}>
              Nome
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              placeholder="Nome (obrigatório)"
              required
            />
            <label htmlFor="phone" className={styles.hiddenLabel}>
              Telefone
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Telefone (obrigatório)"
              required
              {...register("phone")}
            />
            <label htmlFor="email" className={styles.hiddenLabel}>
              E-mail
            </label>
            <input
              id="email"
              type="text"
              {...register("email")}
              placeholder="E-mail (obrigatório)"
              required
            />
            <label htmlFor="address" className={styles.hiddenLabel}>
              Endereço
            </label>
            <input
              id="address"
              type="text"
              {...register("address")}
              placeholder="Endereço (obrigatório)"
            />
            <label htmlFor="addressNumber" className={styles.hiddenLabel}>
              Número
            </label>
            <input
              id="addressNumber"
              type="text"
              {...register("addressNumber")}
              placeholder="Número (obrigatório)"
              required
            />
            <label htmlFor="city" className={styles.hiddenLabel}>
              Cidade
            </label>
            <input
              id="city"
              type="text"
              {...register("city")}
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
        </form>        
      </div>
    </div>    
  )
};