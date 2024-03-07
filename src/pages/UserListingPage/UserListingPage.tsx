import { Heading, PageWrapper } from "components/nemo-ui";
import { UserListingContainer } from "containers";

export const UserListingPage = () => {
  return (
    <PageWrapper>
      <div>
        <Heading level={2}>Nemo 2024</Heading>
      </div>
      <br />
      <UserListingContainer />
    </PageWrapper>
  );
};
