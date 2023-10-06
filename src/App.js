import { BrowserRouter, Routes, Route } from "react-router-dom";

import Expenses from "./pages/Expenses";
import Update from "./pages/Update";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Expenses />} />
          <Route path="/update/:expenseId" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
