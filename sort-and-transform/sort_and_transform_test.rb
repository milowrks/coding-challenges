require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'sort_and_transform'

class SortTransformTest < MiniTest::Test
  def test_works
    assert_equal true, sort_transform([1])
  end
end