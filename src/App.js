import CommentDetail from './CommentDetail';
import faker from 'faker';


function App() {
  return (
  <div className="ui container comments"> 
      <CommentDetail 
      author="Dale"
      timeAgo="Today at 4:54PM"
      commentText="Nice Blog Post"
      img={faker.image.avatar()}
      />
      <CommentDetail 
      author="Jen"
      timeAgo="Today at 7:37AM"
      commentText="Another Comment"
      img={faker.image.avatar()}

      />
      <CommentDetail 
      author="Sy"
      timeAgo="Yesterday at 8:32PM"
      commentText="Too Many Comments"
      img={faker.image.avatar()}

      />
  </div>
   
  );
}


export default App;

