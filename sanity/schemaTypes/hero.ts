import { defineType } from "sanity";

export const hero = defineType({
  title: "Hero",
  name: "hero",
  type: "document",
  fields: [
    {
      name: "locale",
      title: "locale",
      type: "string",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
  ],
});
