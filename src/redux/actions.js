export const addToStorage= (payload) =>{
    return {
        type:'ADD_TO_STORAGE',
        payload:payload
    }
};

export const searchData = payload =>{
  return{
      type:'SEARCH_DATA',
      payload:payload
  }
};