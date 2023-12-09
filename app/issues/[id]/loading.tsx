import { Skeleton } from "@/app/components";
import { Card, Flex } from "@radix-ui/themes";

const LoadingIssueDetailsPage = () => {
  return (
    <div>
      <Skeleton width="20rem" />
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
