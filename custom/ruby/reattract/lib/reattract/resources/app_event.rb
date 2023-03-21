# frozen_string_literal: true

module Reattract
  # /v1/customer_events
  class AppEvent
    class << self
      def create(event_name:, user_id:, payload: {})
        request.post(
          body: {
            payload:              payload,
            event_name:           event_name,
            organization_user_id: user_id
          }
        )
      end

      private

      def request
        Reattract::Request.new(path: '/customer_events')
      end
    end
  end
end
