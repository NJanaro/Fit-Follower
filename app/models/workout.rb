
class Workout < ApplicationRecord

    validates :duration_min, :duration_sec, :athlete_id, :workout_name, :distance, :date_complete, :average_pace, :sport, presence:true

    belongs_to :user,
        foreign_key: :athlete_id,
        class_name: :User


end