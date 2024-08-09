import { BrowserRouter, Routes, Outlet, Route} from "react-router-dom";
import Login from "./Login";
import { BookRecords } from "./Page/BookRecords";
import { UserRegistration } from "./Page/UserRegistration";
import { Records } from "./Page/Records";
import { Borrowed } from "./Page/Borrowed";
import Error404 from "./Page/Error404";
import User from "./User";
import Nav from "./Page/Nav";
import Admin from "./Admin";

const Layout = () => (
  <div>
    <Nav/>
    <Outlet/>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<User />} />
        <Route element={<Layout/>}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/booksRecords" element={<BookRecords />} />
          <Route path="/userRegistration" element={<UserRegistration />} />
          <Route path="/records" element={<Records />} />
          <Route path="/borrowed" element={<Borrowed />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
