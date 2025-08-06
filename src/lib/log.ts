export const log = (
  context: string,
  message: string = "info",
  data = null,
  level = "log"
) => {
  const timestamp = new Date().toISOString();
  const formatted = `[${timestamp}] [${context}] - ${message}`;

  switch (level) {
    case "warn":
      console.warn(formatted, data ?? "");
      break;
    case "error":
      console.error(formatted, data ?? "");
      break;
    case "info":
      console.info(formatted, data ?? "");
      break;
    default:
      console.log(formatted, data ?? "");
  }
};
