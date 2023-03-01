# frozen_string_literal: true

module Reattract
  # /v1/customer_events
  class AppEvent
    class << self
      def create(payload:)
        request.post(
          body: { payload: payload }
        )
      end

      private

      def request
        Reattract::Request.new(path: '/customer_events')
      end
    end
  end
end
