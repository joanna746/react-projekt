import shortid from "shortid";


export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = state =>state.lists;
export const addListForm = payload => ({type:'ADD_LIST_FORM', payload});



const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST_FORM');;
const listsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_LIST:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
  }
  export default listsReducer;