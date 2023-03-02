# frozen_string_literal: true

module Reattract
  # /v1/referral_attributions
  class InviteConversion
    class << self
      def create(user_id:, unique_code: nil)
        request.post(
          body: {
            organization_user_id: user_id,
            unique_code:          unique_code
          }
        )
      end

      def list(limit: 20, page: 1, order: ['id desc'])
        request.get(
          sort:       order,
          pagination: {
            limit: limit,
            page:  page
          }
        )
      end

      private

      def request
        Reattract::Request.new(path: '/referral_attributions')
      end
    end
  end
end
