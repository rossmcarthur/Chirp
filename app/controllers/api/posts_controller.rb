class Api::PostsController < ApplicationController

  def create
    @post = Post.create(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    all_posts = [];
    current_user.following.each do |user|
      user.posts.each do |post|
        all_posts.unshift(post)
      end
    end
    current_user.posts.each do |post|
      all_posts.unshift(post)
    end
    @posts = all_posts
    render :index
  end

  def show
    @post = Post.find_by(params[:id])
    render :show
  end

private

  def post_params
    params.require(:post).permit(:id, :author_id, :body, :author)
  end

end
