class CurrenciesController < ApplicationController 
    def index
        
    end

    def search
        render json: { currencies: currencies } 
    end

    def calculate
        amount = params[:amount]
    
        render json: {
          currency: currency,
          current_price: currency.current_price,
          amount: amount,
          value: currency.calculate_value(amount)
        }
      end

      def delete
        if currency.destroy
          render json: { success: true, message: 'Currency deleted successfully' }
        else
          render json: { success: false, message: 'Failed to delete currency' }, status: :unprocessable_entity
        end
      end

    private 

    def currency 
        @currency ||= Currency.find(params[:id])
    end

    def currencies
        @currencies ||= Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
    end
end