# frozen_string_literal: true

require 'jwt'

module Reattract
  # Handles generation of JWTs
  class JwtGenerator
    ALGO_HMAC_256 = 'HS256'

    attr_accessor :expired_at, :scopes

    def initialize(expired_at: default_exp, scopes: nil)
      @expired_at = expired_at.to_i
      @scopes = scopes&.join(',')
    end

    def generate
      JWT.encode payload, hmac_secret, algorithm
    end

    private

    def hmac_secret
      Reattract.secret_key
    end

    def algorithm
      ALGO_HMAC_256
    end

    def payload
      default_payload.tap do |hash|
        hash[:scp] = scopes if scopes
      end
    end

    def default_payload
      {
        exp: expired_at,
        nbf: jwt_created,
        iss: Reattract.public_key,
        iat: jwt_created
      }
    end

    def jwt_created
      Time.zone.now.to_i
    end

    def default_exp
      1.week.from_now
    end
  end
end
