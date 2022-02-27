import React, {useState} from 'react';


const Filter = ({filteration})  => {
    const [filter, setFilter] = useState("");

    // this function to send value of filter input aps parameter to filteration function
    const filterHandler = (e) => {
        setFilter(e.target.value);
        filteration(e.target.value)
    }

    return   <div style={{marginBottom: "20px"}}><input type="text" className="form-control" style={{width: "400px", margin: "auto"}} placeholder="Search For User" value={filter} onChange={filterHandler} /></div> 

}
export default Filter;