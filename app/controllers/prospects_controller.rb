class ProspectsController < ApplicationController

  def new
    @prospect = Prospect.new
  end 

  def create
    @prospect = Prospect.new
    @prospect.annual_income = sanitize(params[:annual_income])
    @prospect.current_savings = sanitize(params[:current_savings])
    @prospect.retirement_savings = sanitize(params[:retirement_savings])
    @prospect.save
    render'new'
  end

  private

  def sanitize(num)
    num.gsub!(',', '') if num.is_a?(String)
    return num.to_i
  end

end





