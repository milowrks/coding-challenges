require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'money_money_money'

class MoneyMoneyMoneyTest < MiniTest::Test
  def test_should_return_correct_years
    assert_equal 3, calculate_years(1000, 0.05, 0.18, 1100)
  end
  def test_should_return_0_if_desired_amount_equals_principal
    assert_equal 0, calculate_years(1000, 0.05, 0.18, 1000)
  end
end