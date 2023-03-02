# frozen_string_literal: true

module Reattract
  # /v1/organization_customers
  class Customer
    class << self
      def create(user_id:)
        request.post(
          body: {
            organization_user_id: user_id
          }
        )
      end

      def list(limit: 20, page: 1)
        request.get(
          pagination: {
            limit: limit,
            page:  page
          }
        )
      end

      private

      def request
        Reattract::Request.new(path: '/organization_customers')
      end
    end
  end
end
