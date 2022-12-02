import React from "react";
import { Stack } from "react-bootstrap";
import PortalButton from "./atoms/PortalButton";

function CardTotal() {
  return (
    <div className="mt-5">
      <Stack className="d-flex shadow rounded flex-row justify-content-between p-4">
        <PortalButton
          color={"#3BACB6"}
          value={200}
          icon={"/icons/food-bucket.svg"}
          name={"Foods Total"}
        />
        <PortalButton
          color={"#3BACB6"}
          value={100}
          icon={"/icons/calory.svg"}
          name={"Rate Kalori"}
        />

        <PortalButton
          color={"#3BACB6"}
          value={99}
          icon={"/icons/carbon.svg"}
          name={"Rate Carbon"}
        />
        <PortalButton
          color={"#3BACB6"}
          value={"6/day"}
          icon={"/icons/spoon.svg"}
          name={"Rate Eating"}
        />
      </Stack>
    </div>
  );
}

export default CardTotal;
