import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import './App.css'

type FormData = {
  avatar: File;
  name: string;
  phone: number;
  email: string;
  age: number;
}

function App() {

  const [isSuccess, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = () => {
    // console.log(data)

    setSuccess(true);
  }

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {

    if (!event.target.files) return;

    const imageURL = URL.createObjectURL(event.target.files[0]);
    setAvatar(imageURL);
  }

  const [avatarSrc, setAvatar] = useState("");

  const ERROR_MSG = "Este campo é obrigatório";

  return (
    <>
      <div className="container">
        {
          isSuccess ?
            <div className="success-wrapper">
              <div className="card">
                <h2 className="title">Obrigado!</h2>

                <p className="message">
                  Seu registro foi concluído com sucesso!
                </p>
              </div>
            </div>
            : null
        }

        {
          !isSuccess ?
            <>
              <div className="card-wrapper">
                <div className="card">

                  <div className="columns-1">
                    <div className="field avatar">
                      <p className="label">Avatar</p>
                      <img className="" src={avatarSrc} alt="" />
                    </div>
                  </div>

                  <div className="columns-2">
                    <div className="field name">
                      <p className="label">Nome</p>
                      <p className="value">{watch("name")}</p>
                    </div>
                    <div className="field age">
                      <p className="label">Idade</p>
                      <p className="value">{watch("age")}</p>
                    </div>
                  </div>

                  <div className="columns-2">
                    <div className="field phone">
                      <p className="label">Telefone</p>
                      <p className="value">{watch("phone")}</p>
                    </div>
                    <div className="field email">
                      <p className="label">E-mail</p>
                      <p className="value">{watch("email")}</p>
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

                    <input className='btn-submit' type='submit' value="Enviar" />
                  </form>

                </div>
              </div>
            </>
            : null
        }
      </div>
    </>
  )
}

export default App
