import { Box } from "@radix-ui/themes";
import Skeleton from "@/app/components/Skeleton";

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height="3rem" />
      <Skeleton height="15rem" />
      <Skeleton width="8rem" />
    </Box>
  );
};
export default IssueFormSkeleton;
