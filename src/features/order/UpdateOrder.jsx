import { updateOrder } from "@/services/apiRestaurant";
import Button from "@/ui/Button";
import { useFetcher } from "react-router-dom";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form className="text-right" method="PATCH">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
