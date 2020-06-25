import React, { useState, useEffect } from "react";
import Collection from "../../components/Collection/Collection";
import account from "../../services/Account";
import { PersonalizationDropdown } from "./Personalization.Styles";
import { useHistory, useParams } from "react-router-dom";
function Personalization() {
  const { account: personalizationType, mediaType } = useParams();
  const [type, setType] = useState([mediaType, personalizationType]);
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
    if (mediaType !== type[0] || personalizationType !== type[1]) {
      setType([mediaType, personalizationType]);
    }
  }, [personalizationType, mediaType, type]);

  const onDropdownChange = ({ value }) => {
    setType([value, personalizationType]);
    history.push(`${value}`);
  };
  return (
    <div>
      <Collection
        fetchMethod={account.getUserPersonalization}
        title={
          <>
            <span>
              My {personalizationType === "watchlist" ? "List" : "Favorites"}
            </span>
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
