export const fetchUser = username => {
  return $.ajax({
    method: 'get',
    url: `users/${username}`
  });
};
