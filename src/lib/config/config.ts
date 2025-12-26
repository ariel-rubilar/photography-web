import z from "zod";

const configShema = z.object({
  APP: z.object({
    PHOTO_BUCKET_URI: z.string().url(),
    WEB_PHOTO_BASE_API_URI: z.string().url(),
  }),
});

const parsedConfig = configShema.safeParse({
  APP: {
    PHOTO_BUCKET_URI: process.env.PHOTO_BUCKET_URI ?? "",
    WEB_PHOTO_BASE_API_URI: process.env.WEB_PHOTO_BASE_API_URI ?? "",
  },
});

if (!parsedConfig.success) {
  console.error(
    "Invalid configuration:",
    parsedConfig.error.flatten().fieldErrors,
  );
  throw new Error("Invalid configuration");
}

const CONFIG: z.infer<typeof configShema> = parsedConfig.data;

export { CONFIG };
