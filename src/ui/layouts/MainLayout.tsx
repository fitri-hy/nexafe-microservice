import { Outlet } from "react-router-dom";
import { useThemeContext } from "../../ix/stores/ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  const { base } = useThemeContext();

  return (
    <main className={`${base.background} ${base.text} min-h-screen w-full flex flex-col`}>
      <Header />
      <section className="flex-1">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
