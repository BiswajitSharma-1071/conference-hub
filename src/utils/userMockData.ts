import { v4 as uuid, v4 } from "uuid";
import { IInputData } from "../components/GenericComponents/InputModal";

export const inputData: IInputData[] = [
  {
    id: v4(),
    fieldName: "firstName",
    fieldType: "text",
    fieldLabel: "First Name",
  },
  {
    id: v4(),
    fieldName: "lastName",
    fieldType: "text",
    fieldLabel: "Last Name",
  },
  {
    id: v4(),
    fieldName: "email",
    fieldType: "email",
    fieldLabel: "Email ID",
  },
];
