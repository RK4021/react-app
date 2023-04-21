import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./categories";
import errorMap from "zod/lib/locales/en";

const Schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be atleast 3 characters" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(1, { message: "Amount can not be zero." })
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type FormData = z.infer<typeof Schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

// function onSubmit(data) {
//   console.log(data);
// }

const Form = ({ onSubmit }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(Schema) });

  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          aria-describedby="emailHelp"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          className="form-control"
          id="amount"
          {...register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="htmlForm-label">
          Category
        </label>
        <select id="category" className="form-select" {...register("category")}>
          <option value="">Select category</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
