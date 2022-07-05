import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import strContains from '../utils/strContains';


//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
  export const getAllColumns = state =>state.columns;
  // action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({type:'ADD_CARD', payload});
export const updateSearchstring = payload => ({type:'UPDATE_SEARCHSTRING', payload});
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)
export const getColumnsByList = ({columns},listId)=> columns.filter(column=> column.listId ===listId);
export const getAllLists = state =>state.lists;
export const addListForm = payload => ({type:'ADD_LISTFORM', payload});



  const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] }
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] }
    case 'UPDATE_SEARCHSTRING':

      return { ...state, ...action.payload };
    default:
      return state;
      case 'ADD_LISTFORM':
        return {...state, lists: [...state.lists, {...action.payload, id: shortid()}]}

  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;