import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import PostRect from "./PostRect";

function Feed() {
  /*
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);*/

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <PostRect
        displayName="Anand Sagar"
        username="architecttt"
        verified={true}
        text="I can do this!"
        image="https://media.giphy.com/media/L8CqfbpQjcITlAe9iz/giphy.gif"
        avatar="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"
      />
      <PostRect
        displayName="Pavan Karthik"
        username="pawankarthik2"
        verified={true}
        text="I am almost there!"
        image="https://media.giphy.com/media/ivCxavHfnpBGdECGcy/giphy.gif"
        avatar="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
      />

      <PostRect
        displayName="Anand Sagar"
        username="architecttt"
        verified={true}
        text="I can do this!"
        image="https://media.giphy.com/media/L8CqfbpQjcITlAe9iz/giphy.gif"
        avatar="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"
      />
      <PostRect
        displayName="Pavan Karthik"
        username="pawankarthik2"
        verified={true}
        text="I am almost there!"
        image="https://media.giphy.com/media/ivCxavHfnpBGdECGcy/giphy.gif"
        avatar="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
      />
      <PostRect
        displayName="Anand Sagar"
        username="architecttt"
        verified={true}
        text="I can do this!"
        image="https://media.giphy.com/media/L8CqfbpQjcITlAe9iz/giphy.gif"
        avatar="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"
      />
      <PostRect
        displayName="Pavan Karthik"
        username="pawankarthik2"
        verified={true}
        text="I am almost there!"
        image="https://media.giphy.com/media/ivCxavHfnpBGdECGcy/giphy.gif"
        avatar="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
      />
      <PostRect
        displayName="Anand Sagar"
        username="architecttt"
        verified={true}
        text="I can do this!"
        image="https://media.giphy.com/media/L8CqfbpQjcITlAe9iz/giphy.gif"
        avatar="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"
      />
      <PostRect
        displayName="Pavan Karthik"
        username="pawankarthik2"
        verified={true}
        text="I am almost there!"
        image="https://media.giphy.com/media/ivCxavHfnpBGdECGcy/giphy.gif"
        avatar="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
      />
      <PostRect
        displayName="Anand Sagar"
        username="architecttt"
        verified={true}
        text="I can do this!"
        image="https://media.giphy.com/media/L8CqfbpQjcITlAe9iz/giphy.gif"
        avatar="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"
      />
      <PostRect
        displayName="Pavan Karthik"
        username="pawankarthik2"
        verified={true}
        text="I am almost there!"
        image="https://media.giphy.com/media/ivCxavHfnpBGdECGcy/giphy.gif"
        avatar="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
      />
      <PostRect
        displayName="Anand Sagar"
        username="architecttt"
        verified={true}
        text="I can do this!"
        image="https://media.giphy.com/media/L8CqfbpQjcITlAe9iz/giphy.gif"
        avatar="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"
      />
      <PostRect
        displayName="Pavan Karthik"
        username="pawankarthik2"
        verified={true}
        text="I am almost there!"
        image="https://media.giphy.com/media/ivCxavHfnpBGdECGcy/giphy.gif"
        avatar="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
      />
      <PostRect
        displayName="Anand Sagar"
        username="architecttt"
        verified={true}
        text="I can do this!"
        image="https://media.giphy.com/media/L8CqfbpQjcITlAe9iz/giphy.gif"
        avatar="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"
      />
    </div>
  );
}

export default Feed;
