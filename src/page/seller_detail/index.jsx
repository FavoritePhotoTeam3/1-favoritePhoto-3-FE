import styles from "./index.module.css";
import { Title } from "../../components/commons/title/Title";
import { Nav } from "../../components/nav/nav";
import DescCardSeller from "../../components/desc_card_seller/DescCardSeller";

const SellerDetailPage = () => {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <p className={styles.logo}>마켓플레이스</p>

          <div className={styles.detailContent}>
            <div className={styles.titleWrapper}>
              <Title title={"임시 card.title"} />
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.imageWrapper}>
                <img src="임시 card.imageUrl" alt="card image" />
              </div>
              <div>
                <DescCardSeller />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SellerDetailPage;
