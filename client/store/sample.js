const Sample = {
  locations: [
    {
      id: 1,
      name: 'LIC Cliffs'
    },
    {
      id: 2,
      name: 'Brooklyn Boulders Gowanus'
    },
    {
      id: 3,
      name: 'MPHC Climbing Gym'
    }
  ],
  climbingSessions: [
    {
      userId: 1,
      locationId: 1,
      date: '01/01/2019',
      climbs: [
        {
          difficulty: '5-5',
          score: 10
        },
        {
          difficulty: '5-6',
          score: 13
        },
        {
          difficulty: '5-7',
          score: 17
        }
      ]
    },
    {
      userId: 1,
      locationId: 1,
      date: '01/09/2019',
      climbs: [
        {
          difficulty: '5-5',
          score: 10
        },
        {
          difficulty: '5-6',
          score: 13
        },
        {
          difficulty: '5-8',
          score: 24
        }
      ]
    },
    {
      userId: 1,
      locationId: 1,
      date: '01/20/2019',
      climbs: [
        {
          difficulty: '5-5',
          score: 10
        },
        {
          difficulty: '5-7',
          score: 17
        },
        {
          difficulty: '5-8',
          score: 24
        }
      ]
    }
  ]
}

export default Sample
