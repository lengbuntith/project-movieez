import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzcxOTgxOSwiZXhwIjoxOTQzMjk1ODE5fQ.hI_Snx7cfWyrEVy4FoqVb5buyqVEe5wStReb33H8yXk'
export default ({ app }, inject) => {
  const supabaseUrl = 'https://bicfdwigabzwxeymwsnv.supabase.co'
  const supabaseKey = SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  inject('supabase', supabase)
}