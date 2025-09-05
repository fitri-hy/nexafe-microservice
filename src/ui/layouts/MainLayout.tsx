import { Outlet } from "react-router-dom";
import { useThemeContext } from "../../ix/stores/ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  const { bg, text } = useThemeContext();

  return (
    <main className={`${bg} ${text} min-h-screen w-full flex flex-col`}>
      <Header />
      <section className="flex-1">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
