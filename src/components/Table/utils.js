export const displayUserName = (user) => {
  const {
    name: { first, last }
  } = user;
  return `${first} ${last}`;
};

export const displayUserAge = (user) => {
  const {
    dob: { age }
  } = user;
  return `${age}`;
};

export const displayUserCity = (user) => {
  const {
    location: { city }
  } = user;
  return `${city}`;
};

export const displayUserState = (user) => {
  const {
    location: { state }
  } = user;
  return `${state}`;
};
