@routes.each do |route|
    json.set! route.id do
        json.extract! route, :id, :user_id, :route_name, :description, :distance, :created_at
    end
end