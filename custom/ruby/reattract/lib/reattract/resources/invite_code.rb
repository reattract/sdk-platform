# frozen_string_literal: true

module Reattract
  # /v1/customer_codes
  class InviteCode
    class << self
      def create(user_id:, campaign_id:)
        request.post(
          body: {
            organization_user_id: user_id,
            campaign_id:          campaign_id
          }
        )
      end

      def list
        request.get
      end

      private

      def request
        Reattract::Request.new(path: '/customer_codes')
      end
    end
  end
end
