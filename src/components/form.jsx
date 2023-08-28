import { useForm } from 'react-hook-form';
import './form.scss';
import uploadFile from '../services/uploadFile';

const Form = () => {
    const { register, handleSubmit } = useForm();

    const createAnUser = async(data) => {
        try {
            const image = await uploadFile(data.image[0]);
            data.image = image;
            console.log(data);
            
        } catch (error) {
            console.log(error);
            alert("La imagen no fue cargada correctamente");
        }
    }
    
  return (
    <>
      <form className="form" onSubmit={handleSubmit(createAnUser)}>
        <label>Nombre:</label>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          {...register("name")}
        />
        <label>Email:</label>
        <input
          type="text"
          placeholder="Ingrese su correo electrónico"
          {...register("email")}
        />
        <label>Contraseña:</label>
        <input
          type="text"
          placeholder="Ingrese una contraseña segura"
          {...register("password")}
        />
        <label>Ávatar:</label>
        <input type="file" {...register("image")} />
        <button>Crear cuenta</button>
      </form>
    </>
  );
};

export default Form;
