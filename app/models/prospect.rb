class Prospect < ActiveRecord::Base
  before_save :calculate_recommended_insurance

  def calculate_recommended_insurance
    self.recommended_insurance = self.annual_income * 10 * (1 - 0.3)
    - (self.current_savings + self.retirement_savings)
  end

end