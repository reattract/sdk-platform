# frozen_string_literal: true

module Reattract
  # /v1/invite_codes
  class InviteCode
    class << self
      def create(user_id:, campaign_id: nil)
        collection_request.post(
          body: {
            organization_user_id: user_id,
            campaign_id:          campaign_id
          }
        )
      end

      def list(limit: 20, page: 1, order: ['id desc'])
        collection_request.get(
          sort:       order,
          pagination: {
            limit: limit,
            page:  page
          }
        )
      end

      private

      def collection_request
        Reattract::Request.new(path: '/invite_codes')
      end

      def member_request(user_id:)
        Reattract::Request.new(path: "/invite_codes/#{user_id}")
      end
    end
  end
end
