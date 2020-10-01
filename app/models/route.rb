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
#
class Route < ApplicationRecord

    validates :route_name, user_id, presence:true

    belongs_to :user



end
