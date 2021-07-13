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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        email,
        message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true) 
            setName('')
            setEmail('')
            setMessage('')
        }
    })
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
        < form className={styles.main} >

          < formGroup className={styles.inputGroup} >
            < label htmlFor='name'>Name</label>
            < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className={styles.inputField} />
          </formGroup>

          < formGroup className={styles.inputGroup} >
            < label htmlFor='email'>Email</label>
            < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField} />
          </formGroup>

          < formGroup className={styles.inputGroup} >
            < label htmlFor='message'>Message</label>
            < input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className={styles.inputField} />
          </formGroup>

          < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
          </form >
      </div>
    </div>    
  )
};