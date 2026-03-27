import { Nav } from "./components/index.js";
import { AppProvider } from "./utils/AppProvider.js";
import AppRouter from "./pages/AppRouter";

export default function App() {
  return (
    <AppProvider>
      <Nav />
      <AppRouter />
    </AppProvider>
  );
}
