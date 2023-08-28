import { createBrowserRouter } from "react-router-dom";
import registration from "./registration";
import home from "./home";
import shop from "./shop";
import about from "./about";
import contact from "./contact";

const router = createBrowserRouter([registration, home, shop, about, contact]);

export default router;