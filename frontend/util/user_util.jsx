export const fetchUser = username => {
  return $.ajax({
    method: 'get',
    url: `api/users/${username}`
  });
};
