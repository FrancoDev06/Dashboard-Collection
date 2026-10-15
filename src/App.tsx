import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <main>
      <Header title= "Bonjour" subtitle="Bienvenue dans la collection"/>
      <HomePage/>
    </main>
  )
}
