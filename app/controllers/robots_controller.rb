class RobotsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
  end

def show
@robot = Robot.find(params[:id])
render json: { robot: @robot }
end

def update
        @robot = Robot.find(params[:id])
            if @robot.update(robot_params)
                render json: { robot: @robot }
            else
                render json: @robot.errors.full_messages, status: 422
     end
  end

  def create
        @robot = Robot.new(robot_params)
        if @robot.save
            render :show
    else
            render json: @robot.errors.full_messages, status: 422
        end
    end


def robot_params
        params.require(:robot).permit(:status, :id)
 end

end
