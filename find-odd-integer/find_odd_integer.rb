def find_it(seq)
  results = seq.select {|elem| (seq.count(elem).odd?) && (elem.is_a? Integer)}
  return results.first # assuming only one "odd times integer" in seq
end