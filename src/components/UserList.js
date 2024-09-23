// import PropTypes from "prop-types";

const UserList = ({ users, loading, error }) => {
  if (loading) return <div>...Loading</div>;
  if (error) return <div>Something went wrong</div>;
  if (!users) return null;
  return (<>
  <div style={{border:"2px solid green"}}>
    <p style={{textAlign:"center",color:"green"}}>I am a presentation</p>
    <div style={{display:"flex",gap:13,border:"0px solid red",padding:3,margin:3}}>
    

      {users.length &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <img src={user.avatar} />
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p style={{fontSize:7}}>{user.email}</p>
            </div>
          );
        })}
    </div>
    </div>   </>
  );
};

// const user = PropTypes.shape({
//   id: PropTypes.number.isRequired,
//   first_name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
// }).isRequired;

// UserList.propTypes = {
//   users: PropTypes.arrayOf(user).isRequired,
//   loading: PropTypes.bool.isRequired,
//   error: PropTypes.bool.isRequired,
// };

export default UserList;