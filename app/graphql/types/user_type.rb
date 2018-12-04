module Types
  class User < BaseObject
    name "User"

    field :id, !types.ID
    field :email, !types.String
    field :name, !types.String
  end
end
