const INITIAL_STATE = [
  {
    id: 1,
    text: 'Fazer café',
    completed: true,
  }, {
    id: 2,
    text: 'estudar react native',
    completed: false,
  },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Math.random(),
        text: action.payload.text,
        completed: false,
      }];
    case 'MARK_AS_COMPLETED':
      return state.map(todo => (todo.id === action.payload.id ? { ...todo, completed: !action.completed } : todo));
    default:
      return state;
  }
}
