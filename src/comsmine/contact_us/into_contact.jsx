import React from "react";
import { useHistory } from "react-router-dom";
import "./into_contact.scss";


const IntoContact = () => {
  const history = useHistory();
  return (
    <div className="jion-us">
      <p>加入我们的团队，与我们合作，一起走在区块链时代的前端</p>
      <p>
        <button
          onClick={() => {
            history.push("/index/contact-us");
          }}
        >
          联系我们
        </button>
      </p>
    </div>
  );
};

export default IntoContact;
