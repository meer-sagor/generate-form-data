import { isObject } from "../utils/isObject";

type GenerateFormData = {
  objectData: Record<string, any>;
  fileKey?: string;
};

export const useGenerateFormData = ({
  objectData,
  fileKey,
}: GenerateFormData): FormData => {
  const formData = new FormData();
  const appendFormData = (key: string, value: any) => {
    if (value instanceof File && fileKey) {
      formData.append(fileKey, value);
    } else if (value instanceof File) {
      formData.append(key, value);
    } else if (isObject(value)) {
      for (const subKey in value) {
        if (Object.prototype.hasOwnProperty.call(value, subKey)) {
          appendFormData(`${key}[${subKey}]`, value[subKey]);
        }
      }
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (item instanceof File) {
          const fileArrayKey = fileKey
            ? `${fileKey}[${index}]`
            : `${key}[${index}]`;
          formData.append(fileArrayKey, item);
        } else if (isObject(item)) {
          for (const subKey in item) {
            if (Object.prototype.hasOwnProperty.call(item, subKey)) {
              appendFormData(`${key}[${index}][${subKey}]`, item[subKey]);
            }
          }
        } else {
          formData.append(`${key}[${index}]`, item);
        }
      });
    } else {
      formData.append(key, value);
    }
  };
  for (const key in objectData) {
    if (Object.prototype.hasOwnProperty.call(objectData, key)) {
      const value = objectData[key];
      appendFormData(key, value);
    }
  }
  return formData;
};
