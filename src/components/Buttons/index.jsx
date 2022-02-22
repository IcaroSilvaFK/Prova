import React from "react";

import "./styles.scss";
export const ButtonLogin = ({ text }) => {
  return <button className="btnLoging">{text}</button>;
};

export const NewQuestion = ({ text }) => {
  return <button className="btnQuestion">{text}</button>;
};

export const Submit = ({ text }) => {
  return <button className="btnSubmit">{text}</button>;
};
