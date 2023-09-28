import { useForm, SubmitHandler,   } from "react-hook-form"

interface FormData {
  username: string;
  email: string;
  password:string;
}

function RegularForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
            defaultValues: {
              username: "",
              email: "",
              password: "",
            },
        }
    )
    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1> React Hook Form</h1>
      <div>
      <input 
          type="text"
          placeholder="Username"
          {...register("username", { required: "true", minLength:
           {value: 2,
           message: "username is requird"} })} />
      </div>
      <p>{errors.username ?.message}</p>
      <div>
        <input
          placeholder="email"
          {...register("email", {required: "the email is requarid", pattern: 
          {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: "email pettern is not invalid"}
 })} />
      </div>
      <p>{errors.email ?.message}</p>
      <div>
        <input
          placeholder="password"
          {...register("password", {required: "password is required",
          pattern:
          {value:  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])(?!.*\s).{8,20}$/,
          message: "password not invalid"}
    })}/>
      </div>
      <p>{errors.password ?.message}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegularForm;
