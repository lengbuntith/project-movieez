export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzcxOTgxOSwiZXhwIjoxOTQzMjk1ODE5fQ.hI_Snx7cfWyrEVy4FoqVb5buyqVEe5wStReb33H8yXk",
        }
    })
  
    // Set baseURL to something different
    api.setBaseURL('https://bicfdwigabzwxeymwsnv.supabase.co/rest/v1')
  
    // Inject to context as $api
    inject('api', api)
  }