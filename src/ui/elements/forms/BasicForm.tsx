import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  denomination: string;
  prenom: string;
  exampleRequired: string;
};

const BasicForm: React.FC = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("prenom")); // watch input value by passing the name of it

  return (
    <section className="mb-24">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"*/}
      <div className="text-center m-auto mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
        <form className="form-controller" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="p-4">
            <label className="label cursor-pointer">
              Vous êtes ?<span className="label-text">Un particulier</span>
              <input
                type="radio"
                value="Yes"
                {...register("denomination", { required: true })}
              />
              <span className="label">Une entreprise</span>
              <input
                type="radio"
                value="No"
                {...register("denomination", { required: true })}
              />
            </label>

            <label htmlFor="name" className="label">
              Prénom
            </label>
            <input
              type="text"
              className="input input-bordered"
              {...register("prenom", { required: true, maxLength: 80 })}
              onChange={(e) => setValue("prenom", e.target.value)}
            />
            {/* <input
              id="cityName"
              onChange={(e) => setCityName(e.target.value)}
              value={cityName}
              className="input"
            /> */}
          </div>

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" className="btn btn-accent" />
        </form>
      </div>
    </section>
  );
};

export default BasicForm;

//  <form className="form-control flex-col">
//   <div className="p-4">
//     <label htmlFor="cityName" className="label">
//       City name
//     </label>
//     <input
//       id="cityName"
//       onChange={(e) => setCityName(e.target.value)}
//       value={cityName}
//       className="input"
//     />
//     {/* <span className={styles.flag}>{emoji}</span> */}
//   </div>

//   <div className="p-4">
//     <label htmlFor="date" className="label">
//       When did you go to {cityName}?
//     </label>
//     <input
//       id="date"
//       onChange={(e) => setDate(e.target.value)}
//       value={date}
//       className="input"
//     />
//   </div>

//   <div className="p-4">
//     <label htmlFor="notes" className="label">
//       Notes about your trip to {cityName}
//     </label>
//     <textarea
//       id="notes"
//       onChange={(e) => setNotes(e.target.value)}
//       value={notes}
//       className="textarea textarea-bordered textarea-md"
//     />
//   </div>
//   <Button
//     className="btn btn-neutral"
//     onClick={(e) => {
//       e.preventDefault();
//       navigate(-1);
//     }}
//   >
//     &larr; Back
//   </Button>
//   <Button className="btn btn-primary">add</Button>
// </form>
