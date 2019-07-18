require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'is_triangle'

class IsTriangleTest < MiniTest::Test
  def test_return_true_if_sum_two_sides_equals_third
    assert_equal true, is_triangle(3, 2, 1)
  end

  def test_return_true_if_sum_two_sides_is_longer_than_third
    assert_equal true, is_triangle(1, 1, 1)
  end

  def test_return_false_if_sum_two_sides_is_shorter_than_third
    assert_equal false, is_triangle(7, 2, 2)
  end

  def test_return_false_if_any_side_is_0
    assert_equal false, is_triangle(0, 2, 2)
  end

  def test_return_false_if_any_side_is_less_than_0
    assert_equal false, is_triangle(-2, 4, 2)
  end

  def test_return_false_if_any_side_is_not_integer
    assert_equal false, is_triangle(3.5, 2.5, 1)
  end

end