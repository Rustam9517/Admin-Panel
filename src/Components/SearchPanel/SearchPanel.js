import {SearchBlock} from "./SearchStyles";
import React, {useState} from "react";
import {connect} from 'react-redux';
import {searchData} from "../../redux/actions";
import {Link} from "react-router-dom";
const SearchPanel = (props) =>{
    const [search,setSearch] = useState('');
    const [client,setClient] = useState(false);
    const [partner,setPartner] = useState(false);
    const [admin,setAdmin] = useState(false);
    const {searchInUsers} = props;
    const searchHandler = ()=>{
      const searchData = {
          searchValue:search,
          clientBox:client?'client':false,
          partnerBox:partner?'partner':false,
          adminBox:admin?'admin':false
      };
        searchInUsers(searchData);
    };
    return(
        <SearchBlock>
            <div className="checkBlocks">
                <label>
                    <input type="checkbox" onChange={event => setClient(event.target.checked)}/>
                    <span>Client</span>
                </label>
                <label>
                    <input type="checkbox" onChange={event => setPartner(event.target.checked)}/>
                    <span>Partner</span>
                </label>
                <label>
                    <input type="checkbox" onChange={event => setAdmin(event.target.checked)}/>
                    <span>Admin</span>
                </label>
            </div>
            <div className="search">
                <input type="text" placeholder={'Search User'} onChange={event => setSearch(event.target.value)}/>
                <Link to ={'/searchResult'} onClick={searchHandler}>Search</Link>
            </div>
        </SearchBlock>
    );
}
const mapDispatchToProps = (dispatch) =>{
    return {
        searchInUsers : data => dispatch(searchData(data))
    }
};
export default connect(null,mapDispatchToProps)(SearchPanel);