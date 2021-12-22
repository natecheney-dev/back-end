exports.seed = async function(knex) {
  await knex('users').insert([
    {
      first_name: 'Nathan',
      last_name: 'Cheney',
      email: 'email@email.com',
      password: '1234'
    },
    {
      first_name: 'Joe',
      last_name: 'Phillips',
      email: 'email@email.com',
      password: '1234'
    },
    {
      first_name: 'Ethan',
      last_name: 'Roberts',
      email: 'email@email.com',
      password: '1234'
    }
  ])
}