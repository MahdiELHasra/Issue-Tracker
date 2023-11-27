import { Flex, Card } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailsPage = () => {
  return (
    <div>
      <Skeleton width='20rem' />
      <Flex gap="3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="2rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </div>
  );
};
export default LoadingIssueDetailsPage;
