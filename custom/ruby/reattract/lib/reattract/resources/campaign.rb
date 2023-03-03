# frozen_string_literal: true

module Reattract
  # /v1/campaigns
  class Campaign
    class << self
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
        Reattract::Request.new(path: '/campaigns')
      end
    end
  end
end
