const inState = {
    usersData:[],
    usersBySearch:[]
}
function* IdGenerator () {
    let id = 0;
    while (true){
        yield id++;
    }
}
const idToElement = IdGenerator();
let id = 0;
export const reducer = (state =inState ,actions) =>{
    if(actions.type ==='ADD_TO_STORAGE') {
        const usersInLocal = {...localStorage};
        const usersInArray = [];
        if(usersInLocal){
            Object.values(usersInLocal).forEach(el=>{
                usersInArray.push(JSON.parse(el));
            });
        }
        if(usersInArray.length!==0){
            id = usersInArray.reduce((max, i) => i.id > max ? i.id : max, usersInArray[0].id);
            id++;
            actions.payload.id = id;
            localStorage.setItem(`${actions.payload.id}`, JSON.stringify(actions.payload));
        }else{
            id++;
            actions.payload.id = idToElement.next().value;
            localStorage.setItem(`${actions.payload.id}`, JSON.stringify(actions.payload));
        }
    }


    else if(actions.type ==='SEARCH_DATA'){
        const userList = {...localStorage};
        const userListArray = [];
        Object.values(userList).forEach(el=>{
            userListArray.push(JSON.parse(el));
        });
        const filteredUsers = userListArray.filter(el =>{
            if(actions.payload.clientBox && actions.payload.partnerBox && actions.payload.adminBox && actions.payload.searchValue===el.email){
                return el.email===actions.payload.searchValue; //all 3 checkboxes and email
            }else
            if(actions.payload.clientBox && actions.payload.partnerBox && actions.payload.adminBox && actions.payload.searchValue===el.mobile) {
                return el.mobile===actions.payload.searchValue; //all 3 checkboxes and mobile
            }else
            if(actions.payload.clientBox && !actions.payload.partnerBox && !actions.payload.adminBox && !actions.payload.searchValue) {
                return el.status=== actions.payload.clientBox; //client without search text
            }else
            if(!actions.payload.clientBox && actions.payload.partnerBox && !actions.payload.adminBox && !actions.payload.searchValue) {
                return el.status=== actions.payload.partnerBox; //partner without search text
            }else
            if(!actions.payload.clientBox && !actions.payload.partnerBox && actions.payload.adminBox && !actions.payload.searchValue) {
                return el.status=== actions.payload.adminBox; //admin without search text
            }else
            if(actions.payload.clientBox && actions.payload.partnerBox && !actions.payload.adminBox && !actions.payload.searchValue) {
                return el.status=== actions.payload.clientBox||
                       el.status=== actions.payload.partnerBox; //client or partner without search text
            }else
            if(actions.payload.clientBox && !actions.payload.partnerBox && actions.payload.adminBox && !actions.payload.searchValue) {
                return el.status=== actions.payload.clientBox||
                       el.status=== actions.payload.adminBox; //client or admin without search text
            }else
            if(!actions.payload.clientBox && actions.payload.partnerBox && actions.payload.adminBox && !actions.payload.searchValue) {
                return el.status=== actions.payload.partnerBox||
                       el.status === actions.payload.adminBox; //partner or admin without search text
            }else
            if(actions.payload.clientBox && actions.payload.partnerBox && actions.payload.adminBox && !actions.payload.searchValue) {
                return el.status=== actions.payload.partnerBox||
                       el.status=== actions.payload.adminBox ||
                       el.status=== actions.payload.clientBox ; //partner or admin or client without search text
            }else
            if(actions.payload.clientBox && !actions.payload.partnerBox && !actions.payload.adminBox && actions.payload.searchValue===el.email) {
                return el.status=== actions.payload.clientBox &&
                        el.email === actions.payload.searchValue  //client with email
            }else
            if(actions.payload.clientBox && !actions.payload.partnerBox && !actions.payload.adminBox && actions.payload.searchValue===el.mobile) {
                return el.status=== actions.payload.clientBox &&
                        el.mobile === actions.payload.searchValue //client with mobile
            }else
            if(!actions.payload.clientBox && actions.payload.partnerBox && !actions.payload.adminBox && actions.payload.searchValue===el.email) {
                return el.status=== actions.payload.partnerBox &&
                        el.email === actions.payload.searchValue  //partner with email
            }else
            if(!actions.payload.clientBox && actions.payload.partnerBox && !actions.payload.adminBox && actions.payload.searchValue===el.mobile) {
                return el.status=== actions.payload.partnerBox &&
                        el.mobile === actions.payload.searchValue //partner with mobile
            }else
            if(!actions.payload.clientBox && !actions.payload.partnerBox && actions.payload.adminBox && actions.payload.searchValue===el.email) {
                return el.status=== actions.payload.adminBox &&
                        el.email === actions.payload.searchValue  //admin with email
            }else
            if(!actions.payload.clientBox && !actions.payload.partnerBox && actions.payload.adminBox && actions.payload.searchValue===el.mobile) {
                return el.status=== actions.payload.adminBox &&
                        el.mobile === actions.payload.searchValue //admin with mobile
            }else
            if(actions.payload.clientBox && actions.payload.partnerBox && !actions.payload.adminBox && actions.payload.searchValue===el.email) {
                return (el.status=== actions.payload.clientBox ||
                       el.status=== actions.payload.partnerBox) &&
                       el.email === actions.payload.searchValue //client or partner with email
            }else
            if(actions.payload.clientBox && actions.payload.partnerBox && !actions.payload.adminBox && actions.payload.searchValue===el.mobile) {
                return (el.status === actions.payload.clientBox ||
                       el.status === actions.payload.partnerBox) &&
                    el.mobile === actions.payload.searchValue //client or partner with mobile
            }else
            if(actions.payload.clientBox && !actions.payload.partnerBox && actions.payload.adminBox && actions.payload.searchValue===el.email) {
                return (el.status=== actions.payload.clientBox ||
                        el.status=== actions.payload.adminBox) &&
                        el.email === actions.payload.searchValue //client or admin with email
            }else
            if(actions.payload.clientBox && !actions.payload.partnerBox && actions.payload.adminBox && actions.payload.searchValue===el.mobile) {
                return (el.status=== actions.payload.clientBox ||
                        el.status=== actions.payload.adminBox) &&
                        el.mobile === actions.payload.searchValue //client or admin with mobile
            }else
            if(!actions.payload.clientBox && actions.payload.partnerBox && actions.payload.adminBox && actions.payload.searchValue===el.email) {
                return el.status=== (actions.payload.partnerBox ||actions.payload.adminBox) &&
                        el.email === actions.payload.searchValue //partner or admin with email
            }else
            if(!actions.payload.clientBox && actions.payload.partnerBox && actions.payload.adminBox && actions.payload.searchValue===el.mobile) {
                return (el.status=== actions.payload.partnerBox ||
                        el.status=== actions.payload.adminBox) &&
                        el.mobile === actions.payload.searchValue //partner or admin with mobile
            }

        });

        return {...state, usersBySearch: filteredUsers}
    }
    return state;
};






















