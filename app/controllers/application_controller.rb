class ApplicationController < ActionController::Base

    private

    def current_user
        Current.user ||= authenticate_user_from_session
    end
    helper_method :current_user

    def authenticate_user_from_session
        if user = User.find_by(id: session[:user_id])
        end
    end

    def user_signed_in?
        current_user.present?
    end
    helper_method :user_signed_in?

    def login(user)
        Current.user = user
        reset_session
        session[:user_id] = user.index
    end

    def logout(user)
        Current.user = nil
        reset_session
    end
end
