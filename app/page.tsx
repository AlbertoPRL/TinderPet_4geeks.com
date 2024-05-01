import styles from "./page.module.css";
import NavbarMainPage from "./components/navbar-main-page";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.img}></div>
        <div className={styles.container}>
          <NavbarMainPage />
        </div>
      </section>
    </main>
  );
}
