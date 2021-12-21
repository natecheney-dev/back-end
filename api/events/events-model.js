const db = require('../data/db-config');

async function get() {
  const rows = await db('events as e')
    .join('users as u', 'e.organizer', 'u.user_id')
    .join('guests as g', 'e.event_id', 'g.event_id')
    .join('users as us', 'g.user_id', 'us.user_id')
    .select(
      'e.event_id',
      'u.first_name as organizer',
      'e.event_title',
      'e.event_location',
      'e.event_description',
      'e.event_date',
      'g.event_id as event',
      'us.first_name as guest'
    )
    
    
  const eventArray = rows.map((event) => {
    const eventFormat = {
      event_id: event.event_id,
      organizer: event.organizer,
      title: event.event_title,
      location: event.event_location,
      description: event.event_description,
      date: event.event_date
    }
    return eventFormat
  })
  return eventArray
}

async function getById(id) {
  const [event] = await db('events as e')
    .join('users as u', 'e.organizer', 'u.user_id')
    .select(
      'e.event_id',
      'u.first_name as organizer',
      'e.event_title',
      'e.event_location',
      'e.event_description',
      'e.event_date'
    )
    .where('event_id', id)
  return event
}


module.exports = {
  get,
  getById,
}