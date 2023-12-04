

const HomePage = ({ email }) => {
  return (
    <div>
        Welcome {email}
        <button onClick={()=> {
             localStorage.clear();
             window.location.reload();
        }}>Log Out</button>
    </div>
  )
}

export default HomePage