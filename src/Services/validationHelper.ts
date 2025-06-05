export const validateEmail = (
  email: string
): { isValid: boolean; message?: string } => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email)
    ? { isValid: true }
    : { isValid: false, message: "Invalid email format." };
};

export const validateUsername = (
  username: string
): { isValid: boolean; message?: string } => {
  const regex = /^[A-Za-z][A-Za-z0-9_]*$/;
  return regex.test(username)
    ? { isValid: true }
    : {
        isValid: false,
        message:
          "Username must start with a letter and can contain only letters, numbers, and underscores.",
      };
};

export const validatePassword = (
  password: string
): { isValid: boolean; message?: string } => {
  return password.length >= 8
    ? { isValid: true }
    : {
        isValid: false,
        message: "Password must be at least 8 characters long.",
      };
};
