require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'find_odd_integer'

class FindItTest < MiniTest::Test
  def test_return_single_elem_from_array
    assert_equal 9, find_it([9])
  end
end