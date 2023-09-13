import { useForm } from 'react-hook-form'

import Input from '../components/Input/Input'

import '../styles/views/Login.css'
import Label from '../components/Label/Label'
import { Link } from 'react-router-dom'

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
      value: 'Correo',
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
      value: 'Contraseña',
      className: 'login__label'
    }
  }
]

const Login = () => {
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

  return (
    <section className='container container--center'>

      <div className='login login--transparent'>

        <h2 className='title--scondary'>Iniciar Seccion</h2>

        <form className='login__box border-box' onSubmit={handleSubmit()}>

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
