import { useContext, useEffect } from "react";
import { RegistrationContext } from "../Context/RegistrationProvider";

const ProfileForme = () => {
  const { user, updateUserProfile } = useContext(RegistrationContext);

  const changeProfileInformation = (e) => {
    e.preventDefault();
    const usrForm = e.target;
    if (usrForm.userName.value) {
      const userName = usrForm.userName.value;
      updateUserProfile({ displayName: userName });
    }
    if (usrForm.photoUrl.value) {
      const userPhotoUrl = usrForm.photoUrl.value;
      updateUserProfile({ photoURL: userPhotoUrl });
    }
    e.target.reset();
  };



  return (
    <div className="text-center mt-6 ">
      <h1 className="text-3xl font-bold">Your Profile</h1>
      <div className="grid gap-4 mt-7 mb-10">
        <img
          width={200}
          height={200}
          src={user.photoURL}
          alt="user photo"
          className="m-auto"
        />
        <p>
          <span>Name: </span>
          <span className="font-bold">{user.displayName}</span>
        </p>
      </div>
      <div>
        <h1 className="font-bold text-xl mb-3">Change your profile</h1>
        <form
          onSubmit={changeProfileInformation}
          className="flex flex-col w-1/3 m-auto gap-3"
        >
          <input
            type="text"
            name="userName"
            placeholder="Change you name here"
            className="p-2 rounded-lg bg-slate-600"
          />
          <input
            type="url"
            name="photoUrl"
            placeholder="Your photo url"
            className="p-2 rounded-lg bg-slate-600"
          />

          <button
            type="submit"
            className="btn p-1 w-1/4 btn-info text-white m-auto"
          >
            Change Profile info
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForme;
