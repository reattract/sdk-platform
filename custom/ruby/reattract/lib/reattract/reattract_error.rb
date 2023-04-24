# frozen_string_literal: true

module Reattract
  # Standard error message
  class ReattractError < StandardError
    attr_reader :message

    def initialize(message = nil)
      @message = message
      super
    end
  end

  class WebhookVerificationError < ReattractError
  end

  class WebhookSigningError < ReattractError
  end
end
