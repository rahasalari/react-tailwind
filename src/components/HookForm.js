//react-hook-form
import { useForm } from "react-hook-form";

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 text-center">
      <p className="text-center">react Hook Form</p>
      <div className="mt-5">
        <label htmlFor="name" className="text-sm">
          name
        </label>
        <input
          id="name"
          className="border h-8 w-60  mx-auto placeholder-gray-400 ms-4"
          {...register("name", {
            required: true,
            maxLength: 30,
            minLength: 3,
          })}
        />
        <br></br>
        {errors.name && errors.name.type === "required" && (
          <span className="text-red-500 text-xs">This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span className="text-red-500 text-xs">Max length exceeded</span>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <span className="text-red-500 text-xs">Min length</span>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="text-sm">
          email
        </label>
        <input
          id="email"
          className="border h-8 w-60  mx-auto placeholder-gray-400 ms-4"
          {...register("email", {
            required: true,
            pattern: /\S+@\S+\.\S+/,
          })}
        />
        <br></br>
        {errors.email && errors.email.type === "required" && (
          <span className="text-red-500 text-xs">This is required</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span className="text-red-500 text-xs">email format is wrong</span>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="phone" className="text-sm">
          phone
        </label>
        <input
          id="phone"
          className="border h-8 w-60  mx-auto placeholder-gray-400 ms-4"
          {...register("phone", {
            required: true,
            maxLength: 30,
            pattern: /^[0-9]+$/,
          })}
        />
        <br></br>
        {errors.phone && errors.phone.type === "required" && (
          <span className="text-red-500 text-xs">This is required</span>
        )}
        {errors.phone && errors.phone.type === "pattern" && (
          <span className="text-red-500 text-xs">Number format is wrong</span>
        )}
      </div>

      <input
        type="submit"
        className="bg-transparent text-black-700  py-2 px-6 border  text-xs mt-4 ms-32"
      />
    </form>
  );
}
export default HookForm;
