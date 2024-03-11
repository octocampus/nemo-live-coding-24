import { Heading, PageWrapper } from "components/nemo-ui";
import { UserCreationTrigger, UserListingContainer } from "containers";
import styles from "./UserListingPage.module.css";

export const UserListingPage = () => {
  return (
    <PageWrapper>
      <div className={styles.header_wrapper}>
        <Heading level={2}>Nemo 2024</Heading>
        <UserCreationTrigger />
      </div>
      <br />
      <UserListingContainer />
    </PageWrapper>
  );
};
