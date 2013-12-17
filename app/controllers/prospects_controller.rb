class ProspectsController < ApplicationController

  def new
    @prospect = Prospect.new
  end 

  def create
    @prospect = Prospect.new
    @prospect.annual_income = params[:annual_income]
    @prospect.current_savings = params[:current_savings]
    @prospect.retirement_savings = params[:retirement_savings]
    @prospect.save
    render 'new'
  end

end

