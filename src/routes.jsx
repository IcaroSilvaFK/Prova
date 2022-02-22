import { Routes, Route } from "react-router-dom";

import { CreateNewQuestion } from "./pages/CreateNewQuestion";

export const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateNewQuestion />} />
    </Routes>
  );
};
