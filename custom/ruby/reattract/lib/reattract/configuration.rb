# frozen_string_literal: true

module Reattract
  class Configuration
    attr_accessor :public_key, :secret_key, :api_version, :api_host, :use_ssl, :port

    def initialize
      @api_host    = 'https://api.reattract.io'
      @api_version = 'v1'
      @use_ssl     = true
    end
  end
end
