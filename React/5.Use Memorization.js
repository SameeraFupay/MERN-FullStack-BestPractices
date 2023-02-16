function User({ user }) {
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
  
  const MemoizedUser = React.memo(User);