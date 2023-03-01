module Reattract
  class Request
    attr_accessor :endpoint, :bearer_token

    def initialize(endpoint:, bearer_token:)
      @endpoint = endpoint
      @bearer_token = bearer_token
    end

    def get(query: {})
      conn.get endpoint, query
    end

    def patch(body: {})
      conn.patch { |req| prepare_request_with_body(req, body) }
    end

    def post(body: {})
      conn.post { |req| prepare_request_with_body(req, body) }
    end

    def put(body: {})
      conn.put { |req| prepare_request_with_body(req, body) }
    end

    private

    def prepare_request_with_body(req, body)
      req.url endpoint
      req.body = body.to_json
    end

    def authorization
      "Bearer #{bearer_token}"
    end

    def conn
      @conn ||= Connection.build(authorization:)
    end
  end
end
