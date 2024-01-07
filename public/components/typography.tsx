import { FunctionalComponent } from "preact";
import styles from "./typography.module.css";

export const Header: FunctionalComponent = ({ children }) => (
  <h1 class={styles.title}>{children}</h1>
);

export const Subheader: FunctionalComponent = ({ children }) => (
  <p class={styles.subtitle}>{children}</p>
);
