import { useForm } from 'react-hook-form'

import '../styles/views/Login.css'

// components
import Input from '../components/Input/Input'
import Label from '../components/Label/Label'

// router-dom
import { Link, useNavigate } from 'react-router-dom'

// redux
import { useDispatch } from 'react-redux'

import {
  loginAsync
} from '../features/users/usersSlice'
import { useState } from 'react'
import Modal from '../components/Modal/Modal'

const fieldsForm = [
  {
    input: {
      name: 'password',
      type: 'password',
      placeholder: '*****',
      className: 'login__input'
    },
    rules: {
      required: true
    },
    label: {
      value: 'Contraseña',
      className: 'login__label'
    }
  },
  {
    input: {
      name: 'email',
      type: 'email',
      placeholder: 'user@email.com',
      className: 'login__input'
    },
    rules: {
      required: true
    },
    label: {
      value: 'Correo',
      className: 'login__label'
    }
  }
]

const Login = () => {
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const fields = fieldsForm.map((field, index) => (
    <div key={index} className='login__component'>
      <Label
        label={field.label.value}
        className={field.label.className}
      />
      <Input
        key={index}
        register={register}
        errors={errors}
        rules={field.rules}
        attribute={field.input}
        label={1}
        class={field.input.className}
      />
      {errors[field.input.name] && <span>Error field</span>}
    </div>
  ))

  const onSubmit = async (data) => {
    dispatch(loginAsync(data)).unwrap()
      .then(result => {
        navigate('/Init')
      })
      .catch(() => {
        setError(true)
      })
  }

  return (
    <section className='container container--center'>
      {error && <Modal
        title='Usuario no identificado'
        texts='Lo sentimos, nos hemos hemos encontrado un usuario con esas crendenciales'
        error={error}
        className='modal__default'
        active='modal__default--active'
        setError={setError}
                />}
      <div className='login login--transparent'>

        <h2 className='title--scondary'>Iniciar Seccion</h2>

        <form className='login__box border-box' onSubmit={handleSubmit(onSubmit)}>

          {fields}

          <div className='login__button m-0-5em'>
            <button className='button w-100 border-box' type='Submit'>Iniciar</button>
          </div>

        </form>

        <span>o</span>

        <div className='login__extra'>
          <Link to='/Init' className='link'>Registrar</Link>
        </div>

      </div>

    </section>
  )
}

export default Login
