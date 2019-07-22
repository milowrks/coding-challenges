require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'sort_and_transform'

class SortTransformTest < MiniTest::Test
  def test_return_four_strings_separated_by_hyphen
   assert_equal "1234-1234", sort_transform([1, 2, 3, 4])
  end

  def test_return_first_and_last_two_numbers
    assert_equal "1234-1256", sort_transform([1, 2, 5, 6, 3, 4])
  end

  def test_return_first_and_second_str
    assert_equal "1234-1256", sort_transform([1, 2, 5, 6, 3, 4])
  end
end