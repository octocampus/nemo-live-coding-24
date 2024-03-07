import { Card, Heading } from "../nemo-ui";
import styles from "./UsersListing.module.css";

export const UsersListingEmptyState = () => {
  return (
    <Card className={styles.empty_wrapper}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png "
        width="128"
        height="128"
        alt=""
      />
      <Heading level={3}>Aucun Nemo trouve</Heading>
    </Card>
  );
};
