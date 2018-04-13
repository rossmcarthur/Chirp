json.extract! post, :id, :author, :body, :created_at
json.image_url asset_path(post.author.image.url)
