class AddBodyToPostsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :body, :string
    remove_column :posts, :upvotes
    remove_column :posts, :link
  end
end
