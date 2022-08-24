import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
    sm:flex-row flex-col bg-blackk-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>let's try out service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10ml-0 sm:mt-0 mt-10`}>
      <Button styles={undefined} />{" "}
    </div>
  </section>
);

export default CTA;
