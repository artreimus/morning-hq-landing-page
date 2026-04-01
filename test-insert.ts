import { supabase } from './lib/supabase'

async function run() {
  try {
    const { data, error } = await supabase.from('waitlist_signups').insert({
      email: 'test@example.com',
      full_name: 'Test Setup',
      source: 'test-script'
    }).select()
    
    if (error) {
      console.error('Insert error:', error)
      process.exit(1)
    }
    console.log('Insert success:', data)
  } catch (e) {
    console.error('Caught error:', e)
    process.exit(1)
  }
}

run()
