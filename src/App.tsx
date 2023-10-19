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

  const ERROR_MSG = "Este campo é obrigatório";

  return (
    <>
      <div className="container">
        <div className="card-wrapper">
          <div className="card">

            <div className="grid grid-cols-1">
              <div className="field avatar">
                <p className="label">Avatar</p>
                <img className="" src={avatarSrc} alt="" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div className="field name">
                <p className="label">Nome</p>
                <p>{watch("name")}</p>
              </div>
              <div className="field age">
                <p className="label">Idade</p>
                <p>{watch("age")}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div className="field phone">
                <p className="label">Telefone</p>
                <p>{watch("phone")}</p>
              </div>
              <div className="field email">
                <p className="label">E-mail</p>
                <p>{watch("email")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-wrapper">
          <h2 className="title">Cadastro Parcelex</h2>
          <div className="form">
            <form className="" onSubmit={handleSubmit(onSubmit)}>

              <div className="section">
                <label className='label' htmlFor="avatar">Escolha seu avatar:</label>
                <input
                  name='avatar'
                  className="field"
                  type="file"
                  onChange={handleImage}
                  required
                />
                {errors.avatar && <span className='error-text'>{ERROR_MSG}</span>}
              </div>

              <div className="section">
                <label className='label' htmlFor="name">Preencha seu nome:</label>
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
                {errors.name && <span className='error-text'>{ERROR_MSG}</span>}
              </div>

              <div className="section">
                <label className='label' htmlFor="número">Preencha seu número:</label>
                <input
                  className="field"
                  type="number"
                  placeholder='99999-9999'
                  min={11111111}
                  max={999999999}
                  {...register("phone", {
                    required: true,
                  })}
                />
                {errors.phone && <span className='error-text'>{ERROR_MSG}</span>}
              </div>

              <div className="section">
                <label className='label' htmlFor="email">Preencha seu email:</label>
                <input
                  className="field"
                  type="email"
                  placeholder='joao@dasilva.com'
                  maxLength={30}
                  {...register("email", { required: true })}
                />
                {errors.email && <span className='error-text'>{ERROR_MSG}</span>}
              </div>

              <div className="section">
                <label className='label' htmlFor="Idade">Preencha sua idade:</label>
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
                {errors.age && <span className='error-text'>{ERROR_MSG}</span>}
              </div>

              <input className='btn-submit' type='submit' value="Enviar" />
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
