class Arc < ApplicationRecord
  acts_as_paranoid

  belongs_to :creator, class_name: :User, foreign_key: :creator_id, inverse_of: :arcs

  validates :title, presence: true
end
