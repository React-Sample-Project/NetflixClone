import React, { useState } from "react";
import Collection from "../../components/Collection";
import account from "../../services/Account";
import { MyListDropdown } from "./MyList.Styles";
function MyList() {
  const [mediaType, setMediaType] = useState("movies");
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
    setMediaType(value);
  };
  return (
    <div>
      <div></div>
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
        args={[mediaType]}
      />
    </div>
  );
}

export default MyList;
