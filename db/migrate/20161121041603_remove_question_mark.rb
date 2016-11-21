class RemoveQuestionMark < ActiveRecord::Migration[5.0]
  def change
    rename_column :posts, :is_event?, :is_event
  end
end
