const fieldsForm = [
  {
    input: {
      name: 'password',
      type: 'password',
      placeholder: 'user@email.com',
      value: ''
    },
    label: {
      value: 'Correo'
    }
  },
  {
    input: {
      name: 'email',
      type: 'email',
      placeholder: '*****',
      value: ''
    },
    label: {
      value: 'Contraseña'
    }
  }
]

const Login = () => {
  const fields = fieldsForm.map((field, index) => (
    <div key={index}>
      <label>{field.label.value}</label>
      <input
        type={field.input.type}
        placeholder={field.input.placeholder}
      />
    </div>
  ))

  return (
    <div>
      <form>
        {fields}
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
