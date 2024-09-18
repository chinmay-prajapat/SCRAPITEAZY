import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="position-relative h-100 w-100">
      <Navbar />
      <div className={styles.page}>
        <main className={styles.main}>
          <Hero />
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
