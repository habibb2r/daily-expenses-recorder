import useGetProfile from "../../Hooks/useGetProfile";


const Profile = () => {
    const [profile, loadProfile, ] = useGetProfile()
    return (
        <div className="px-[3%] py-[2%]">
            <h1 className="font-semibold text-2xl">Profile Information</h1>
            <div className="flex flex-col justify-center items-center gap-10 pt-[3%]">
                <img className="h-[100px] rounded-full border-4 border-green-400 shadow-lg" src={profile?.image} alt="" />
                <div className="flex flex-col justify-start items-start gap-5">
                    <div>
                        <h1 className="font-semibold text-slate-400">Full Name</h1>
                        <h1 className="font-semibold ">{profile?.fullName}</h1>
                    </div>
                    <div>
                        <h1 className="font-semibold text-slate-400">Position</h1>
                        <h1 className="font-semibold ">{profile?.position}</h1>
                    </div>
                    <div>
                        <h1 className="font-semibold text-slate-400">Gender</h1>
                        <h1 className="font-semibold ">{profile?.gender}</h1>
                    </div>
                    <div>
                        <h1 className="font-semibold text-slate-400">Date of Birth</h1>
                        <h1 className="font-semibold ">{profile?.dob}</h1>
                    </div>
                    <div>
                        <h1 className="font-semibold text-slate-400">Email</h1>
                        <h1 className="font-semibold ">{profile?.email}</h1>
                    </div>
                    <div>
                        <h1 className="font-semibold text-slate-400">Employee ID</h1>
                        <h1 className="font-semibold ">{profile?.employeeId}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;