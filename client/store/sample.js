export const Sample = {
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
      id: 1,
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
      id: 2,
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
      id: 3,
      userId: 2,
      locationId: 2,
      date: '01/09/2019',
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
    },
    {
      id: 4,
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
    },
    {
      id: 5,
      userId: 2,
      locationId: 2,
      date: '01/20/2019',
      climbs: [
        {
          difficulty: '5-6',
          score: 13
        },
        {
          difficulty: '5-8',
          score: 24
        },
        {
          difficulty: '5-8',
          score: 24
        },
        {
          difficulty: '5-9',
          score: 31
        }
      ]
    },
    {
      id: 6,
      userId: 1,
      locationId: 1,
      date: '01/28/2019',
      climbs: [
        {
          difficulty: '5-6',
          score: 13
        },
        {
          difficulty: '5-8',
          score: 24
        },
        {
          difficulty: '5-8',
          score: 24
        },
        {
          difficulty: '5-9',
          score: 31
        }
      ]
    }
  ]
}

export const SampleUtility = {
  getUserClimbingHistory: userId => {
    return Sample.climbingSessions.filter(
      climbSesh => climbSesh.userId === userId
    )
  }
}
