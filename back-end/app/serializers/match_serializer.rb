class MatchSerializer
  include FastJsonapi::ObjectSerializer
  attributes :matcher_id, :matchee_id
end
