import React, {useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios'

const Form = () => {
    
    const [formInfo, setFormInfo] = useState()
    const [formResponse, setFormResponse] = useState()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      description: '',
    },
    onSubmit: async (values, {resetForm}) => {
      try{
        setFormInfo(values)
        await axios({
          method: 'POST',
          url:'https://app-server-agencia.herokuapp.com/form',
          data: values
        }).then((res)=>{
          setFormResponse(res.data.state)
          setFormInfo(values)
          resetForm()
        })
      } catch{
        alert('error')
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='form-level'>
        <label>Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder='Nombre'
          onChange={formik.handleChange}
          value={formik.values.name}
          autofocus
        />
      </div>
      <div className='form-level'>
      <label>Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder='micorreo@email.com'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className='form-level'>
      <label>Mensaje</label>
        <input
          id="description"
          name="description"
          type="textarea"
          placeholder='Escribinos tu consulta'
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </div>
      <button className='form-button' type="submit">Enviar</button>
    </form>
  );
};

export default Form