// react-hook-form
import { useForm } from 'react-hook-form'
// components
import Input from '../components/Input/Input'
import Modal from '../components/Modal/Modal'
import Label from '../components/Label/Label'
// utils
import { createRoom } from '../utils/createRoom'
// react-router-dom
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
// react
import { useState } from 'react'

const fieldsForm = [
  {
    input: {
      name: 'title',
      type: 'text',
      placeholder: 'Titulo de la sala',
      className: 'input__default'
    },
    rules: {
      required: false
    },
    label: {
      label: 'Titulo',
      className: 'label__default'
    }
  },
  {
    input: {
      name: 'points',
      type: 'number',
      placeholder: 'puntos',
      className: 'input__default'
    },
    rules: {
      required: false
    },
    label: {
      label: 'Puntos de aprobacion de las preguntas',
      className: 'label__default'
    }
  },
  {
    input: {
      name: 'places',
      type: 'number',
      placeholder: 'lugares',
      className: 'input__default'
    },
    rules: {
      required: false
    },
    label: {
      label: 'Poner un numero de usuario que tengan las mejores puntaciones de las preguntas',
      classNamer: 'label__default'
    }
  },
  {
    input: {
      name: 'password',
      type: 'password',
      placeholder: '******',
      className: 'input__default'
    },
    rules: {
      required: false
    },
    label: {
      label: 'Puedes agregar una contrasena',
      className: 'label__default'
    }
  }
]

const NewRoom = () => {
  const [error, setError] = useState(true)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const isLogin = useSelector(state => state.users.isLogin)

  if (!isLogin) {
    return <Navigate to='/Login' />
  }

  const modalInformation = {
    title: '',
    texts: '',
    className: '',
    active: '',
    error: '',
    setError: ''
  }

  const fields = fieldsForm.map((field, index) => (
    <div key={index} className='login__components'>
      <Label
        label={field.label.label}
        className={field.label.className}
      />
      <Input
        attribute={field.input}
        rules={field.rules}
        register={register}
      />
      {errors[field.input.name] && <span>Error Field</span>}
    </div>
  ))

  const onSubmit = async data => {
    const response = await createRoom(data)

    if (response.status === 201) {
      const id = response.data.data.room._id
      return <Navigate to={`/${id}`} />
    }
    if (response.status.startWith('4')) {
      setError(false)
      modalInformation.title = 'error al crear la sala'
      modalInformation.texts = 'Tu sala no se pudo crear con exito vuele a intentar'
      modalInformation.error = error
      modalInformation.setError = setError
    }
  }

  return (
    <section>
      <h2>Crear Sala</h2>
      {error ?? <Modal
        title={modalInformation.title}
        texts={modalInformation.texts}
        error={modalInformation.error}
        setError={modalInformation.setError}
                />}
      <div className='login login--transparent'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields}
          <div className='login__button'>
            <button type='submit' className='button'>Crear sala</button>
            <button type='submit' className='button'>Añadir preguntas</button>
          </div>
        </form>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  )
}

export default NewRoom
