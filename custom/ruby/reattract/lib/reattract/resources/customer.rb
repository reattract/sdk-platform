# frozen_string_literal: true

module Reattract
  # /v1/organization_customers
  class Customer
    class << self
      def create(user_id:, **kwargs)
        collection_request.post(
          body: {
            organization_user_id: user_id,
            **kwargs
          }
        )
      end

      def update(user_id:, **kwargs)
        member_request(id: user_id).patch(
          body: kwargs
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
        Reattract::Request.new(path: '/organization_customers')
      end

      def member_request(id:)
        Reattract::Request.new(path: "/organization_customers/#{id}")
      end
    end
  end
end
