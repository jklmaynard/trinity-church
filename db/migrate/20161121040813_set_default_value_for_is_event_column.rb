class SetDefaultValueForIsEventColumn < ActiveRecord::Migration[5.0]
  def change
    change_column :posts, :is_event?, :boolean, default: false
  end
end
