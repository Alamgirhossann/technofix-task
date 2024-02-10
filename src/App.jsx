import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLists from "./pages/UserLists";
import AddUserForm from "./Components/UserAddForm";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-10">
        <Routes>
          <Route path="/" element={<UserLists />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/add-user" element={<AddUserForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
