# frozen_string_literal: true

module Reattract
  # /v1/customer_codes
  class InviteSession
    class << self
      def get(id:)
        member_request(id: id).get
      end

      private

      def member_request(id:)
        Reattract::Request.new(path: "/invite_sessions/#{id}")
      end
    end
  end
end
