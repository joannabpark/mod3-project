class MatchesController < ApplicationController

    def show
        match = Match.find_by(id: params[:id])
        options = {
          include: [:user, :other_user]
        }
        render json: MatchSerializer.new(match, options)
      end

end
