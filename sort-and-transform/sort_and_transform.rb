# Given an array of numbers, return a string made up of four parts:

# a) a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

# b) the same as above, post sorting the array into ascending order,

# c) the same as above, post sorting the array into descending order,

# d) the same as above, post converting the array into ASCII characters and sorting alphabetically.

# The four parts should form a single string, each part separated by a hyphen: '-'

# example format of solution: 'asdf-tyui-ujng-wedg'

require 'pry'

def sort_transform(numbers)
  def to_ascii(numbers)
    return numbers.map { |num| num.chr }
  end

  def get_word(numbers)
    return numbers.first(2) + numbers.last(2)
  end

  str_1 = get_word(to_ascii(numbers)).join()
  str_2 = get_word(to_ascii(numbers.sort)).join()
  str_3 = get_word(to_ascii(numbers.sort.reverse)).join()
  str_4 = get_word(to_ascii(numbers).sort).join()

  return str_1 + "-" + str_2 + "-" + str_3 + "-" + str_4
end