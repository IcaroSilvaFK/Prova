import React from "react";
import { useForm } from "react-hook-form";
import { NewQuestion } from "../../components/Buttons";

import "./styles.scss";
export const CreateNewQuestion = () => {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="container">
      <h1>Seila</h1>
      <form></form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <label htmlFor="question1">question1</label>
          <input
            type="text"
            placeholder="camscm~s"
            className="input__style"
            {...register("question1")}
          />
        </div>
        <div className="row">
          <label htmlFor="question2">question2</label>
          <input
            type="text"
            placeholder="camscm~s"
            className="input__style"
            {...register("question2")}
          />
        </div>
        <div className="row">
          <label htmlFor="question3">question3</label>
          <input
            type="text"
            placeholder="camscm~s"
            className="input__style"
            {...register("question3")}
          />
        </div>
        <div className="row">
          <label htmlFor="question4">question4</label>
          <input
            type="text"
            placeholder="camscm~s"
            className="input__style"
            {...register("question4")}
          />
        </div>
        <div className="row">
          <label htmlFor="question5">question5</label>
          <input
            type="text"
            placeholder="camscm~s"
            className="input__style"
            {...register("question5")}
          />
        </div>
        <NewQuestion type="submit" text="Enviar" />
      </form>
    </div>
  );
};
