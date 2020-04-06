export const FecofaMenu = [
  {
    id: 1,
    label: 'inicio',
    link: '/',
    icon: '',
    sections : [
      {
        id: 1,
        label: 'Fecofa',
        link: '/about',
      },
      {
        id: 2,
        label: 'Selección Colombia',
        link: '/colombia-team',
      },
      {
        id: 3,
        label: 'Comité',
        link: '/chair',
      },
    ]
  },
  {
    id: 2,
    label: 'Partidos',
    link: '/matches',
    icon: '',
    sections : [
      {
        id: 1,
        label: 'Resultados',
        link: '/matches/results',
      },
      {
        id: 2,
        label: 'Siguiente fecha',
        link: '/matches/nearlest',
      },
      {
        id: 3,
        label: 'Próximos partidos',
        link: '/matches/next',
      },
    ]
  },
  {
    id: 3,
    label: 'Equipos',
    link: '/teams',
    icon: ''
  },
  {
    id: 4,
    label: 'Jugadores',
    link: '/players',
    icon: '',
    sections : [
      {
        id: 1,
        label: 'defensiva',
        link: '/players/defensive',
      },
      {
        id: 2,
        label: 'Ofensiva',
        link: '/players/ofensive',
      },
      {
        id: 3,
        label: 'Equipos especiales',
        link: '/players/special-teams',
      },
      {
        id: 4,
        label: 'Técnicos',
        link: '/players/coaches',
      }
    ]
  }
];