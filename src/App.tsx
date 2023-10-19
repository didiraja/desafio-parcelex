import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import './App.css'

type Inputs = {
  avatar: File;
  name: string;
  phone: number;
  email: string;
  age: number;
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  // console.log(watch("avatar"))

  // const allFields = watch();

  // const [cardData, setCardData] = useState<Inputs>(allFields);

  const avatarWatch = watch("avatar");

  useEffect(() => {
    console.log('atualizou')
  }, [avatarWatch])

  return (
    <>
      <div className="container grid gap-3">
        <div className="card-wrapper p-5">
          <div className="card bg-blue-gray-700 text-teal-parcelex-300 rounded-md p-3">
            <p className="field avatar">
              Avatar
            </p>
            <p className="field name">
              {watch("name")}
            </p>
            <p className="field age">
              {watch("age")}
            </p>
            <p className="field phone">
              {watch("phone")}
            </p>
            <p className="field email">
              {watch("email")}
            </p>
          </div>
        </div>
        <div className="form-wrapper p-5">
          <div className="form">
            <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="field"
                type="file"
                {...register("avatar", { required: true })}
              />
              {errors.avatar && <span className='text-xs text-red-300'>Este campo é obrigatório</span>}

              <input
                className="field"
                type="text"
                placeholder="João da Silva"
                maxLength={20}
                pattern="[A-Za-z]+"
                {...register("name", {
                  required: true
                })}
              />
              {errors.name && <span className='text-xs text-red-300'>Este campo é obrigatório</span>}

              <input
                className="field"
                type="number"
                placeholder='99999-9999'
                minLength={8}
                maxLength={9}
                {...register("phone", {
                  required: true,
                })}
              />
              {errors.phone && <span className='text-xs text-red-300'>Este campo é obrigatório</span>}

              <input
                className="field"
                type="email"
                placeholder='joao@dasilva.com'
                maxLength={30}
                {...register("email", { required: true })}
              />
              {errors.email && <span className='text-xs text-red-300'>Este campo é obrigatório</span>}

              <input
                className="field"
                type="number"
                placeholder='99'
                min={18}
                max={99}
                {...register("age", {
                  required: true,
                })}
              />
              {errors.age && <span className='text-xs text-red-300'>Este campo é obrigatório</span>}

              <input type='submit' value="Enviar" />
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
