/* eslint-disable react/prop-types */
const Input = ({ register, rules, attribute }) => {
  console.log(rules)
  return (
    <input {...attribute} {...register(attribute.name, { ...rules })} />
  )
}

export default Input
