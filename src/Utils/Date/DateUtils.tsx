export const isValidDate = (text: string) => {
  if (text !== undefined && text !== '') {
    const numericInput = text.replace(/\D/g, '');

    // Add slashes between the date components
    const formattedInput = numericInput.replace(
      /(\d{2})(\d{2})(\d{4})/,
      '$1/$2/$3',
    );

    // Validate the date format using a regular expression
    const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
    const isValidFormat = dateFormat.test(formattedInput);
    return isValidFormat ? formattedInput : false;
  }

  return false;
};

export const isUnder16 = (dateString: string) => {
  const dateOfBirth = new Date(dateString);
  const ageDiff = Date.now() - dateOfBirth.getTime();
  const ageInYears = new Date(ageDiff).getUTCFullYear() - 1970;
  return ageInYears < 16;
};
