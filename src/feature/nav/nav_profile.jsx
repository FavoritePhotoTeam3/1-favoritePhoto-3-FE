import Profile from "../../components/modals/profile/profile";

const NavProfile = ({ user, isOpen, openProfile }) => {
  return <Profile user={user} isOpen={isOpen} openProfile={openProfile} />;
};

export default NavProfile;
