import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";

const UserName = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        background: "#ececec",
        alignItems: "center",
      }}
    >
      {data.map((item) => (
        // <div key={item.name}>

        //     {item.username}

        //     </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "left",
            flexDirection: "row",
          }}
        >
          <Card
            title="Person Details"
            bordered={true}
            style={{
              width: 300,
              border: "1px solid black",

              padding: "5px",

              margin: "20px",
              display: "flex",
              flexDirection: "column",
              background: "#fff",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                textAlign: "justify",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "100px" }}>Name</div>
              <div>: {item.name}</div>
            </p>
            <p
              style={{
                fontSize: "20px",
                textAlign: "justify",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "100px" }}>UserName</div>
              <div>: {item.username}</div>
            </p>
            <p
              style={{
                fontSize: "20px",
                textAlign: "justify",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "90px" }}>email</div>
              <div className="elipsis">: {item.email}</div>
            </p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default UserName;
