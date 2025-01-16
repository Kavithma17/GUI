export const validateSignup = (fname, lname, email, password) => {
  const errors = {};

  if (!fname.trim()) {
    errors.fname = "First name is required.";
  }

  if (!lname.trim()) {
    errors.lname = "Last name is required.";
  }

  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email is invalid.";
  }

  if (!password.trim()) {
    errors.password = "Password is required.";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  return errors;
};
