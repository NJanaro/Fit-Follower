
class Workout < ApplicationRecord

    validates :athlete_id, :workout_name, :distance, :date_complete, :average_pace, :sport, presence:true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User


end