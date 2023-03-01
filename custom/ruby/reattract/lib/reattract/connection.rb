# frozen_string_literal: true

module Reattract
  class Connection
    class << self
      def build(authorization:)
        url = request_url

        Faraday.new(url: url) do |conn|
          conn.headers['Content-Type']  = 'application/vnd.api+json'
          conn.headers['Accept']        = 'application/vnd.api+json'
          conn.headers['Authorization'] = authorization

          conn.adapter Faraday.default_adapter
        end
      end

      private

      def request_url
        attributes = { host: Reattract.api_host, path: Reattract.api_version }

        attributes[:port] = configured_port if configured_port?

        uri_module.build(attributes).to_s
      end

      def configured_port?
        !configured_port.zero?
      end

      def configured_port
        Reattract.port.to_i
      end

      def uri_module
        Reattract.use_ssl ? URI::HTTPS : URI::HTTP
      end
    end
  end
end
