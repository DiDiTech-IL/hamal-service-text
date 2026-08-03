export const logMessage = ({
  id,
  state,
}: {
  id: string;
  state: "call" | "send" | "success" | "failed";
}) => {
  switch (state) {
    case "call":
      console.log("❕ Incoming SMS: ", id);
      break;
    case "send":
      console.log("📨 Sending SMS: ", id);
      break;
    case "success":
      console.log("✔️ Successful ", id);
      break;
    case "failed":
      console.log("❌ Failed ", id);
      break;
  }
};
