class RegistrationsController < ApplicationController
    def new
    end

    def existing
    end
    # def create
    #     @user = User.new(registration_params)
    #     if @user.save
    #         login @user
    #         redirect_to root_path
    #     else
    #         render :new, status: :uprocessable_entity
    #     end
    # end

    # def registration_params
    #     params.require(:user).permit(:email, :password, :password_confirmation)
    # end
end