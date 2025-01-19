import AuthService from '../services/AuthService';

function UserProfile() {
  const user = AuthService.getUser();

  if (!user) {
    return <div>No user information available</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
