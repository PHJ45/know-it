class CreateProspects < ActiveRecord::Migration
  def change
    create_table :prospects do |t|
      t.integer :annual_income
      t.integer :current_savings
      t.integer :retirement_savings
      t.integer :recommended_insurance

      t.timestamps
    end
  end
end
