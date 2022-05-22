export const getActiveFriends = async () => {
  try {
    const response = await fetch('http://localhost:3004/friends?active=true');
    const activeFriends = await response.json();
    return activeFriends;
  } catch (error) {
    throw new Error(error.message);
  }
};
