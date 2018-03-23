const fetchChirps = follows => {
  return $.ajax({
    method: 'get',
    url: 'api/chirps'
  });
};
