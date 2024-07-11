import { useForm } from 'react-hook-form';

type IFormData = {
  errors: {
    email: {
      message: string;
    };
  };
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  CheckingPassword: string;
};

const ToDoList = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('email', { required: 'Error' })}
          placeholder="Email"
          type="email"
        />
        <span>{errors?.email?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
