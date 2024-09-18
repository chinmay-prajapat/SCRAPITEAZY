import Image from "next/image";
import styles from "@/app/styles/hero.module.css";
const Hero = () => {
  return (
    <div className={styles.heroParent}>
      <Image src={"/waste.jpg"} alt="" fill />

      <div className={styles.heroText}>
        <h1>Waste Management Dumpster Rental</h1>
        <div className={styles.btns}>
          <button className={styles.btn}>Explore</button>
          <button className={styles.btn}>More About</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
