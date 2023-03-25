import Input from "./Input"

import { useForm } from "react-hook-form"

const CarForm = () => {
  const { register, handleSubmit } = useForm({})

  const onSubmit = () => {
    console.log('pass')
  }
  return (
    <div>
      <form onSubmit={(handleSubmit(onSubmit))}>
        <div>
          <label htmlFor="make">Make</label>
          <Input {...register('make')} name='make' placeholder='Make'/>
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <Input {...register('model')} name='model' placeholder='Model'/>
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <Input {...register('year')} name='year' placeholder='Year'/>
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <Input {...register('color')} name='color' placeholder='Color'/>
        </div>
        <div className="modal-btns">
          <button
          className="btn">
            Submit
          </button>


        </div>
      </form>
    </div>
  )
}

export default CarForm