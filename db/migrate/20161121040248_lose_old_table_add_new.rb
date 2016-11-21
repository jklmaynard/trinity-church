class LoseOldTableAddNew < ActiveRecord::Migration[5.0]
  def change
    drop_table :posts
    create_table :posts do |t|
      t.string :title
      t.string :body
      t.boolean :is_event?

      t.timestamps
    end
  end
end
