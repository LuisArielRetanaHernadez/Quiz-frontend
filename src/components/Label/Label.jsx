/* eslint-disable react/prop-types */
const Label = ({ label, className, forId, id }) => {
  return (
    <label id={id || '#'} className={className || 'label'} htmlFor={forId}>{label}</label>
  )
}

export default Label
