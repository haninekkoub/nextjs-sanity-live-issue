import { defineLive } from "next-sanity";
import "server-only";

import { client } from "./client";
export const { SanityLive, SanityLiveStream, sanityFetch } = defineLive({
  browserToken: process.env.SANITY_API_TOKEN,
  client,
  serverToken: process.env.SANITY_API_TOKEN,
});
