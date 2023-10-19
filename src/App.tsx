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

  const handleImage = (event) => {
    const imageURL = URL.createObjectURL(event.target.files[0]);
    setAvatar(imageURL);
  }

  const [avatarSrc, setAvatar] = useState("");

  return (
    <>
      <div className="container">
        <div className="card-wrapper">
          <div className="card">
            <div className="field avatar">
              <p className="label">
                Avatar
              </p>
              <img className="" src={avatarSrc} alt="" />
            </div>
            <div className="field name">
              <p>
                {watch("name")}
              </p>
            </div>
            <div className="field age">
              <p>
                {watch("age")}
              </p>
            </div>
            <div className="field phone">
              <p>
                {watch("phone")}
              </p>
            </div>
            <div className="field email">
              <p>
                {watch("email")}
              </p>
            </div>
          </div>
        </div>
        <div className="form-wrapper">
          <div className="form">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="field"
                type="file"
                onChange={handleImage}
                required
              />
              {errors.avatar && <span className='error-text'>Este campo é obrigatório</span>}

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
              {errors.name && <span className='error-text'>Este campo é obrigatório</span>}

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
              {errors.phone && <span className='error-text'>Este campo é obrigatório</span>}

              <input
                className="field"
                type="email"
                placeholder='joao@dasilva.com'
                maxLength={30}
                {...register("email", { required: true })}
              />
              {errors.email && <span className='error-text'>Este campo é obrigatório</span>}

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
              {errors.age && <span className='error-text'>Este campo é obrigatório</span>}

              <input className='btn-submit' type='submit' value="Enviar" />
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
