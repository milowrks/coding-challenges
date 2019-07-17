def find_it(seq)
  results = []
  seq.each do |elem|
    if (seq.count(elem).odd?) && (elem.is_a? Integer)
      results << elem
    end
  end
  return results.first # assuming only one "odd times integer" in seq
end