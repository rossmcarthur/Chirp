export const fetchPosts = () => {
  return $.ajax({
    method: 'get',
    url: 'api/posts',
  });
};

export const fetchPost = id => {
  return $.ajax({
    method: 'get',
    url: `api/posts/${id}`
  });
};
