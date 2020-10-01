class MatchesController < ApplicationController

    def index
      matches = Match.all 
      render json: MatchSerializer.new(matches)
    end

    def show
      match = Match.find_by(id: params[:id])
      render json: MatchSerializer.new(match)
    end

    def new
      match = Match.new
    end

    def create
      match = Match.create(id: match_params[:id])
      render json: MatchSerializer.new(match)
    end

    def destroy
        match = Match.find(params[:id])
        match.destroy
        render json: { message: 'success'}
    end

    private

    def match_params
        params.require(:match).permit(:matcher_id, :matchee_id)
    end

end

# def create
#   species = Species.find_or_create_by(name: params[:species])
#   animal = Animal.create(name: params[:name], gender: params[:gender].to_i, species: species)
#   render json: animal
# end
