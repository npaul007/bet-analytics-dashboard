import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SecretStore } from "./modules/stores/SecretStore";
import { SecretPage } from "./pages/SecretPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const secretStore = new SecretStore();

function App() {
  if (secretStore.keyEnabled) {
    return <SecretPage secretStore={secretStore} />;
  }

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
