class Currency < ApplicationRecord
    def calculate_value(amount)
        (current_price.to_f * amount.to_f).round(2)
    end
    def current_price
        url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest"
        symbol = self.currency_symbol
        query = {
            "symbol" => symbol
        }
        headers = {
            "X-CMC_PRO_API_KEY" => Rails.application.credentials.dig(:coin_market_cap, :api_key),
            "Accepts" => "application/json"
        }
        request = HTTParty.get(url, :headers => headers, :query => query)
        puts request
        response = JSON.parse(request.body)["data"][symbol]["quote"]["CAD"]["price"]
    end
end