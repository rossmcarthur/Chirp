author = post.author

json.extract! post, :id, :body, :created_at

json.author do
  json.username author.username
  json.id author.id
  json.followers author.followers
  json.following author.following
end
json.image_url asset_path(post.author.image.url)
