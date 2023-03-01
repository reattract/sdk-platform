module Reattract
  class InviteConversion
    def create(body:)
      request.post(body:)
    end

    def list
      request.get
    end

    private

    def request
      Reattract::Request.new(endpoint: 'referral_attributions')
    end
  end
end
