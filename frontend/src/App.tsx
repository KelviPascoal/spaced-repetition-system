import { AuthProvider } from "./contexts/AuthContex";
import { AppRouter } from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App;
