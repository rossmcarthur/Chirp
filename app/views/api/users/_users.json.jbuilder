json.extract! user, :id, :email, :username, :posts, :followers, :following
json.image_url asset_path(user.image.url)
