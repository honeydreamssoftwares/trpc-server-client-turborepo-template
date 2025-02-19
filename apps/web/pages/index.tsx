import { Button } from "ui";
import { trpc } from "../utils/trpc";

export default function Home() {
  // An API call for NextJS Server
  fetch("http://localhost:3000/api/hello").then((response) =>
    response.json().then((data) => console.log(data)),
  );

  // API call for apps/api Express tRPC server
  const { data: exampleCall, isLoading } =
    trpc.example.exampleInput.useQuery("SomeString");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col mx-4">
        <span className="pt-2 text-lg font-bold ">Web Page</span>
        <div className="my-2">
          <Button />
        </div>
        <div className="flex flex-col">
          <span className="font-bold my-2">User Details</span>
          <div>
            ID : <span>{exampleCall?.id}</span>
          </div>
          <div>
            Name : <span>{exampleCall?.name}</span>
          </div>
          <div>
            User Session :{" "}
            <span>{exampleCall?.hasSession ? "true" : "false"}</span>
          </div>
        </div>
      </div>
    </>
  );
}
