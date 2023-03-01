# frozen_string_literal: true

module Reattract
  class Configuration
    attr_accessor :public_key
    attr_accessor :secret_key
    attr_accessor :api_version
    attr_accessor :api_host
    attr_accessor :use_ssl
    attr_accessor :port

    def initialize
      @api_host    = "https://api.reattract.io"
      @api_version = "v1"
      @use_ssl     = true
    end
  end
end
