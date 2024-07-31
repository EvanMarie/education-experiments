import { Form } from "@remix-run/react";
import Button from "~/components/buildingBlocks/button";
import HStack from "~/components/buildingBlocks/hStack";
import Input from "~/components/buildingBlocks/input";

export default function InputForm({
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Form method="get">
      <HStack gap="gap-3vh">
        <Input
          className="w-30vh"
          type="text"
          name="query"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button htmlType="submit" buttonText="search" type="smallNormal" />
      </HStack>
    </Form>
  );
}
