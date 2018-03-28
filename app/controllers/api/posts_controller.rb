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
    @posts = current_user.following.chirps
    render :index
  end

  def show
    @post = Chirp.find_by(params[:id])
    render :show
  end

private

  def post_params
    params.require(:post).permit(:id, :author_id, :body, :author)
  end

end
