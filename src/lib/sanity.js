import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "i3cs00qo",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});
