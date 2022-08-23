Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'gianmarcocariggi.it'

    resource '*',
      headers: :any,
      methods: [:get]
  end
end