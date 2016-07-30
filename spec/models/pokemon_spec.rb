require 'rails_helper'
require 'spec_helper'

describe Pokemon do
  describe "creation" do
    context "valid attributes" do
      it "should be valid" do
        pika = FactoryGirl.build(:pikachu)

        expect(pika).to be_valid
      end
    end
  end
end