import { DynamicFieldData } from "../../dynamic-control-types";

export const fields: DynamicFieldData[] = [
  {
    fieldName: "title",
    inputType: "text",
    label: "Title",
    defaultValue: "",
    config: {
      required: true,
    },
  },
  {
    fieldName: "description",
    inputType: "textarea",
    label: "Description",
    defaultValue: "",
  },
];
