const users = [
  {
    id: 1,
    created_at: '2021-06-21 21:19:47',
    name: 'John Doe'
  },
  {
    id: 2,
    created_at: '2021-07-01 21:19:47',
    name: 'Jane Doe'
  },
  {
    id: 3,
    created_at: '2021-07-16 21:19:47',
    name: 'Mike Myers'
  },
]

// Sorts users by date in ascending order
users.sort((item1, item2) => {
  const dateToTimestamp = date => date ? Date.parse(date) / 1000 : 0;
  const item1Timestamp = dateToTimestamp(item1.created_at);
  const item2Timestamp = dateToTimestamp(item2.created_at);
  return (item1Timestamp < item2Timestamp) ? -1 : (item1Timestamp > item2Timestamp) ? 1 : 0;
});

console.log(users);
