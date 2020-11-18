# == Schema Information
#
# Table name: routes
#
#  id          :bigint           not null, primary key
#  route_name  :string           not null
#  description :text
#  user_id     :integer          not null
#  distance    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  start_lat   :float            not null
#  start_lng   :float            not null
#  end_lat     :float            not null
#  end_lng     :float            not null
#
class Route < ApplicationRecord

    validates :route_name, :user_id, :start_lat, :start_lng, :end_lat, :end_lng, presence:true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User



end
