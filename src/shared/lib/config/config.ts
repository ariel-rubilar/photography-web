import z from "zod";

// Server-side config schema
const serverConfigSchema = z.object({
  PHOTO_BUCKET_URI: z.string().nonempty(),
});

// Client-side config schema
const clientConfigSchema = z.object({
  WEB_PHOTO_BASE_API_URI: z.string().url(),
});

let SERVER_CONFIG: z.infer<typeof serverConfigSchema>;
let CLIENT_CONFIG: z.infer<typeof clientConfigSchema>;

// Only parse server config on the server
if (typeof window === "undefined") {
  const parsed = serverConfigSchema.safeParse({
    PHOTO_BUCKET_URI: process.env.PHOTO_BUCKET_URI ?? "",
  });
  if (!parsed.success) {
    console.error(
      "Invalid server configuration:",
      parsed.error.flatten().fieldErrors,
    );
    throw new Error("Invalid server configuration");
  } else {
    SERVER_CONFIG = parsed.data;
  }
}

// Only parse client config on the client
if (typeof window !== "undefined") {
  const parsed = clientConfigSchema.safeParse({
    WEB_PHOTO_BASE_API_URI:
      process.env.NEXT_PUBLIC_WEB_PHOTO_BASE_API_URI ?? "",
  });
  if (!parsed.success) {
    console.error(
      "Invalid client configuration:",
      parsed.error.flatten().fieldErrors,
    );
    throw new Error("Invalid client configuration");
  } else {
    CLIENT_CONFIG = parsed.data;
  }
}

export { SERVER_CONFIG, CLIENT_CONFIG };
