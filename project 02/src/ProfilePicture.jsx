function ProfilePicture() {
  const imageURL = "./ src/assets/profile.jpg";

  const handleClick = () => console.log("OUCH!");

  return (<img onClick={handleClick} src={imageURL}></img>);
}

export default ProfilePicture;