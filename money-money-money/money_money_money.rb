def calculate_years(principal, interest, tax, desired)
  years = 0
  sum = 0
  while principal < desired do
    years+=1
    principal = principal + principal * interest * (1 - tax)
  end
  return years
end