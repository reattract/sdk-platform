# frozen_string_literal: true

module Reattract
  # Makes requests using the Connection object
  class Request
    attr_accessor :connection

    def initialize(path:, bearer_token: generate_bearer)
      @connection = Reattract::Connection.new(
        authorization: authorization(bearer_token),
        path:          path
      )
    end

    def get(query: {})
      connection.get(query: query)
    end

    def patch(body: {})
      connection.patch(body: body)
    end

    def post(body: {})
      connection.post(body: body)
    end

    def put(body: {})
      connection.put(body: body)
    end

    private

    def generate_bearer
      Reattract::JwtGenerator.new.generate
    end

    def prepare_request_with_body(req, body)
      req.url endpoint
      req.body = body.to_json
    end

    def authorization(bearer_token)
      "Bearer #{bearer_token}"
    end

    def conn
      @conn ||= Connection.build(authorization: authorization)
    end
  end
end
