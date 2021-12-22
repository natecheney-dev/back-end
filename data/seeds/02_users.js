exports.seed = async function(knex) {
  await knex('users').insert([
    {
      first_name: 'Nathan',
      last_name: 'Cheney',
      email: '1@email.com',
      password: 'password'
    },
    {
      first_name: 'Joe',
      last_name: 'Phillips',
      email: '2@email.com',
      password: 'password'
    },
    {
      first_name: 'Ethan',
      last_name: 'Roberts',
      email: '3@email.com',
      password: 'password'
    }
  ])
}
