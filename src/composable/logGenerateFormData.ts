export const logGenerateFormData = (formData: FormData) => {
    formData.forEach((value, key) => {
      if (value instanceof File) {
        console.log(
          `${key}: [File] Name: ${value.name}, Size: ${value.size}, Type: ${value.type}`
        );
      } else {
        console.log(`${key}: ${value}`);
      }
    });
  };