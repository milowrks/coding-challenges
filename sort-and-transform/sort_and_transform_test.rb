require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'sort_and_transform'

class SortTransformTest < MiniTest::Test
  def test_sample_test_1
   assert_equal "oprn-nors-sron-nors", sort_transform([111, 112, 113, 114, 115, 113, 114, 110])
  end

  def test_sample_test_2
    assert_equal "3>c~-3>d~-~d>3-3>d~", sort_transform([51, 62, 73, 84, 95, 100, 99, 126])
  end

  def test_sample_test_3
    assert_equal "Beoq-7Boq-qoB7-7Boq", sort_transform([66, 101, 55, 111, 113])
  end

  def test_sample_test_4
    assert_equal "Nuy}-Ncy}-}ycN-Ncy}", sort_transform([78, 117, 110, 99, 104, 117, 107, 115, 120, 121, 125])
  end
end