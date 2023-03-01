# frozen_string_literal: true

require 'forwardable'

require_relative 'reattract/version'
require_relative 'reattract/configuration'
require_relative 'reattract/jwt_generator'
require_relative 'reattract/connection'
require_relative 'reattract/request'
require_relative 'reattract/resources/invite_conversion'

# Core reattract module. Enables connection to the reattract API
module Reattract
  @config = Reattract::Configuration.new

  class << self
    extend Forwardable

    attr_reader :config

    def_delegators :@config, :public_key, :public_key=
    def_delegators :@config, :secret_key, :secret_key=
    def_delegators :@config, :api_version, :api_version=
    def_delegators :@config, :api_host, :api_host=
    def_delegators :@config, :use_ssl, :use_ssl=
    def_delegators :@config, :port, :port=

    def configure
      yield(configuration)
    end
  end
end
