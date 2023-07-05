import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fetch_Posts } from "../Redux/Actions";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { posts } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(Fetch_Posts())
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      <h1>
        Fetch Posts Using <b>Redux</b>
      </h1>
      {loading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <>
          {posts.map((post) => {
            return (
              <>
                <div>{post.title}</div> <br />
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export default Home;
