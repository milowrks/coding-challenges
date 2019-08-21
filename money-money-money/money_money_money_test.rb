require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'money_money_money'

class MoneyMoneyMoneyTest < MiniTest::Test
  def test_works
    assert_equal true, calculate_years(0, 0, 0, 0)
  end
end