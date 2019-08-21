require 'pry'

def calculate_years(principal, interest, tax, desired)
  years = 0
  sum = 0
  # loop do
  #   years+=1
  #   sum = principal * (1 + interest) * (1 - tax)
  #   principal = sum
  #   if principal >= desired
  #     break
  #   end
  # end
  while principal <= desired do
    years+=1
    principal = principal + principal * interest * (1 - tax)
    # binding.pry
  end
  return years
end

puts calculate_years(1000, 0.05, 0.18, 1100)