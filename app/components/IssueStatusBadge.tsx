import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface Props {
  status: Status;
}
const IssueStatusBadge = ({ status }: Props) => {
  if (status === "OPEN") {
    return <Badge color="red">Open</Badge>;
  } else if (status === "IN_PROGRESS") {
    return <Badge color="violet">In_Progress</Badge>;
  } else if (status === "CLOSED") {
    return <Badge color="green">Closed</Badge>;
  }
};
export default IssueStatusBadge;
