@posts.each do |post|
  json.set! post.id do
    json.partial! 'posts', post: post
  end
end
