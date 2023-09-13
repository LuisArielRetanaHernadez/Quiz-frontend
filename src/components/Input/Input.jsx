/* eslint-disable react/prop-types */
const Input = ({ register, rules, attribute }) => {
  return (
    <input {...attribute} {...register(attribute.name, { ...rules })} />
  )
}

export default Input
