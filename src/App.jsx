
import { BrowserRouter} from "react-router-dom";
import Router from "@/routers/index";
import AuthRouter from "@/routers/utils/authRouter.jsx";
import "./index.less";

function App() {
  return (
    <BrowserRouter>
      <AuthRouter>
        <Router />
      </AuthRouter>
    </BrowserRouter>
  );
}

export default App;
