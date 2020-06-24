import React, { useState, useEffect, useCallback } from "react";
import Collection from "../../components/Collection/Collection";
import account from "../../services/Account";
import { PersonalizationDropdown } from "./Personalization.Styles";
import { useHistory, useParams } from "react-router-dom";
function Personalization() {
  const { account: infoType, mediaType } = useParams();
  const [type, setType] = useState([mediaType, infoType]);
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
  useEffect(() => {
    if (mediaType !== type[0] || infoType !== type[1]) {
      setType([mediaType, infoType]);
    }
  }, [infoType, mediaType, type]);
  const onResultsChange = useCallback((results) => {
    console.log(results);
  }, []);
  const onDropdownChange = ({ value }) => {
    setType([value, infoType]);
    history.push(`${value}`);
  };
  return (
    <div>
      <Collection
        fetchMethod={account.getUserPersonalization}
        onResultsChange={onResultsChange}
        title={
          <>
            <span>My {infoType === "watchlist" ? "List" : "Favorites"}</span>
            <PersonalizationDropdown
              style={{ display: "inline-block" }}
              options={options}
              value={mediaType}
              onChange={onDropdownChange}
              placeholder="Select Media Type"
            />
          </>
        }
        args={type}
      />
    </div>
  );
}

export default Personalization;
