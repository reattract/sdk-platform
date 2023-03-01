# frozen_string_literal: true

require 'net/http'
require 'pry'

module Reattract
  # Handles the construction of the connection object
  class Connection
    attr_reader :authorization, :resource_uri

    def initialize(authorization:, path:)
      @resource_uri = build_uri
      @resource_uri.path += path
      @authorization = authorization
    end

    def get(query: {})
      resource_uri.query = query.to_query
      request = build_request(Net::HTTP::Get)

      make_request(request)
    end

    def patch(body: {})
      request = build_request(Net::HTTP::Patch, body: body)

      make_request(request)
    end

    def put(body: {})
      request = build_request(Net::HTTP::Put, body: body)

      make_request(request)
    end

    def post(body: {})
      request = build_request(Net::HTTP::Post, body: body)

      make_request(request)
    end

    private

    def make_request(request)
      JSON.parse(client.request(request).body)
    end

    def build_request(method_class, body: nil)
      method_class.new(resource_uri).tap do |request|
        request['Content-Type']  = 'application/json'
        request['Accept']        = 'application/json'
        request['Authorization'] = authorization
        request.body = body.to_json if body
      end
    end

    def client
      Net::HTTP.new(resource_uri.host, resource_uri.port)
    end

    def build_uri
      attributes = { host: Reattract.api_host, path: Reattract.api_version }

      attributes[:port] = configured_port if configured_port?

      uri_module.build(attributes)
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
