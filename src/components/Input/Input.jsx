/* eslint-disable react/prop-types */
const Input = ({ register, rules, attribute }) => {
  return (
    <input className={attribute.className ?? 'input__default'} {...attribute} {...register(attribute.name, { ...rules })} />
  )
}

export default Input
