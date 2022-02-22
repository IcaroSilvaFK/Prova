import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { NewQuestion } from "../../components/Buttons";
import { api } from "../../services/axios";
import "./styles.scss";
export const CreateNewQuestion = () => {
  const { register, handleSubmit, reset } = useForm();

  async function handleQuestions(data) {
    const response = await api.post("question", data);

    if (response.status === 201) {
      toast.success("QUestão Criada com sucesso ⚓");
      reset();
    }
  }

  return (
    <div className="container">
      <h1>Seila</h1>

      <form onSubmit={handleSubmit(handleQuestions)}>
        <div className="column">
          <label htmlFor="question1">question1</label>
          <input
            type="text"
            placeholder="camscm~s"
            className="input__style"
            {...register("question1")}
          />
        </div>
        <div className="column">
          <label htmlFor="question2">question2</label>
          <input
            type="text"
            placeholder="camscm~s"
            className="input__style"
            {...register("question2")}
          />
        </div>
        <div className="column">
          <label htmlFor="question3">question3</label>
          <input
            type="text"
            placeholder="camscm~s"
            className="input__style"
            {...register("question3")}
          />
        </div>
        <div className="column">
          <label htmlFor="question4">question4</label>
          <input
            type="text"
            placeholder="camscm~s"
            className="input__style"
            {...register("question4")}
          />
        </div>
        <div className="column">
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
