/* eslint-disable react/prop-types */
import Input from '../Input/Input'

const Answer = ({ input, className, id, classNameBtn1, classNameBtn2 }) => {
  return (
    <div id={id ?? '#'} className={className ?? 'content__answer'}>
      <Input
        register={input.register}
        rules={input.rule}
        attribute={input.input}
      />
      <button>Correcta</button>
      <button>Eleminar</button>
    </div>
  )
}

export default Answer
