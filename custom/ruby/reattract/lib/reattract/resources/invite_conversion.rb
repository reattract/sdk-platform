# frozen_string_literal: true

module Reattract
  # /v1/invite_conversions
  class InviteConversion
    class << self
      def create(user_id:, invite_code: nil, invite_session_id: nil, customer: {})
        request.post(
          body: {
            organization_user_id:  user_id,
            unique_code:           invite_code,
            invite_session_id:     invite_session_id,
            organization_customer: customer
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
        Reattract::Request.new(path: '/invite_conversions')
      end
    end
  end
end
