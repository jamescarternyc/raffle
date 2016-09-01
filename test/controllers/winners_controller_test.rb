require 'test_helper'

class WinnersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @winner = winners(:one)
  end

  test "should get index" do
    get winners_url, as: :json
    assert_response :success
  end

  test "should create winner" do
    assert_difference('Winner.count') do
      post winners_url, params: { winner: { email: @winner.email } }, as: :json
    end

    assert_response 201
  end

  test "should show winner" do
    get winner_url(@winner), as: :json
    assert_response :success
  end

  test "should update winner" do
    patch winner_url(@winner), params: { winner: { email: @winner.email } }, as: :json
    assert_response 200
  end

  test "should destroy winner" do
    assert_difference('Winner.count', -1) do
      delete winner_url(@winner), as: :json
    end

    assert_response 204
  end
end
