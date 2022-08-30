import React from "react";
import styles from "./style";
import { closed } from "./assets";

import {
  Navbar,
  Hero,
  Prices,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

const App = () => (
  <div>
    <section className="background-color: green w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </section>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Prices /> <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
        <Clients /> <CTA /> <Footer />
      </div>
    </div>
  </div>
);

export default App;
