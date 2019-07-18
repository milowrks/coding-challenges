require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'is_triangle'

class IsTriangleTest < MiniTest::Test
  def test_return_true
    assert_equal true, is_triangle(1, 2, 3)
  end
end