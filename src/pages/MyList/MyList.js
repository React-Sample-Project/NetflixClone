import React, { useState } from "react";
import Collection from "../../components/Collection";
import account from "../../services/Account";
import { MyListDropdown } from "./MyList.Styles";
import { useHistory, useLocation } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
function MyList() {
  const { pathname } = useLocation();
  const query = useQuery();
  const [mediaType, setMediaType] = useState([query.get("type")]);
  const history = useHistory();
  const options = [
    {
      value: "movies",
      label: "Movies",
    },
    {
      value: "tv",
      label: "TV Shows",
    },
  ];
  const onDropdownChange = ({ value }) => {
    history.push(`${pathname}?type=${value}`);
    setMediaType([value]);
  };
  return (
    <div>
      <Collection
        fetchMethod={account.getWatchList}
        title={
          <>
            <span>My List</span>
            <MyListDropdown
              style={{ display: "inline-block" }}
              options={options}
              value={options[0]}
              onChange={onDropdownChange}
              placeholder="Select Media Type"
            />
          </>
        }
        args={mediaType}
      />
    </div>
  );
}

export default MyList;
