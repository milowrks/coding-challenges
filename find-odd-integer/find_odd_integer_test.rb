require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'find_odd_integer'

class FindItTest < MiniTest::Test
  def test_return_single_elem_from_array
    assert_equal 9, find_it([9])
  end

  def test_return_nil_if_elem_appears_twice
    assert_equal nil, find_it([9, 9])
  end

  def test_return_elem_appearing_thrice
    assert_equal 8, find_it([8, 0, 9, 9, 0, 8, 8])
  end

  def test_return_integer_appearing_odd_times
    assert_equal 5, find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
  end
  
  def test_return_positive_integer_appearing_odd_times
    assert_equal 5, find_it([20,1,1,2,2,3,3,5,5,4,20,4,5])
  end

  def test_return_negative_integer_appearing_odd_times
    assert_equal -1, find_it([1,1,2,-2,5,2,4,4,-1,-2,5])
  end

  def test_return_nil_if_float_appearing_odd_times
    assert_equal nil, find_it([1.23, 34, 34])
  end

  def test_return_integer_if_both_float_and_integer_appearing_odd_times
    assert_equal nil, find_it([1.23, 1.23, 34, 34])
  end

  def test_return_integer_if_both_string_and_integer_appearing_odd_times
    assert_equal nil, find_it([1.23, 1.23, "34", "34", 34, 34])
  end
  
end