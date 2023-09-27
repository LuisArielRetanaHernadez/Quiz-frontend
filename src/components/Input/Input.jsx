/* eslint-disable react/prop-types */
const Input = ({ register, rules, attribute }) => {
  const isAdvanced = typeof register === 'function'
  return (
    <>
      {
      isAdvanced
        ? <input className={attribute?.className ?? 'input__default'} {...attribute} {...register(attribute?.name, { ...rules })} />
        : <input className={attribute?.className} {...attribute} />

    }
    </>
  )
}

export default Input
