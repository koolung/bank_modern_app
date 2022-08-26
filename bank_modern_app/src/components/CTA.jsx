import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
    sm:flex-row flex-col bg-blackk-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Try <span className="text-gradient">Beaute Lia Hair</span> now!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get the amazing haircut experience you've always wanted from our
        experienced hairdressers
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10ml-0 sm:mt-0 mt-10`}>
      <Button styles={undefined} />{" "}
    </div>
  </section>
);

export default CTA;
