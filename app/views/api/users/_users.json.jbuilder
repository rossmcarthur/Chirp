json.extract! user, :id, :email, :posts
json.image_url asset_path(user.image.url)
