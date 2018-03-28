export const fetchPosts = following => {
  return $.ajax({
    method: 'get',
    url: 'api/posts',
    data: { following }
  });
};

export const fetchPost = id => {
  return $.ajax({
    method: 'get',
    url: `api/posts/${id}`
  });
};
