import { Routes, Route } from "react-router-dom";
import { Question } from "./pages/Question";

import { CreateNewQuestion } from "./pages/Responses";

export const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<Question />} />
      <Route path="/response" element={<CreateNewQuestion />} />
    </Routes>
  );
};
