// pages/index.js
"use client"
import Sidebar from "../components/SideBar";
import styles from "./page.module.css";
import { store, ReduxProvider } from './tools/store'; // Adjust the path as per your project structure

export default function Home() {
  return (
    <ReduxProvider store={store}>
      <main className={styles.main}>
        <Sidebar/>
      </main>
    </ReduxProvider>
  );
}
