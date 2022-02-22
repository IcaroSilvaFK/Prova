import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NewQuestion } from "../../components/Buttons";
import { api } from "../../services/axios";
import "./styles.scss";

export const Question = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  async function onSubmit({ question, nomeProva }) {
    const prova = {
      nome_prova: nomeProva,
    };
    const titleQUestion = {
      question: question,
    };
    const response = await api.post("provas", prova);
    const questions = await api.post("question", titleQUestion);
    if (response.status === 201 && questions.status === 201) {
      toast.success("Sucesso ⚓");
      reset();
      navigate("response");
    }
  }
  return (
    <main className="container__question">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="column">
          <label htmlFor="nomeProva">nomeProva</label>
          <input
            type="text"
            id="nomeProva"
            {...register("nomeProva")}
            className="input__style"
          />
        </div>
        <div className="column">
          <label htmlFor="question">question</label>
          <textarea
            {...register("question")}
            id="question"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <NewQuestion type="submit" text="Enviar" />
      </form>
    </main>
  );
};
