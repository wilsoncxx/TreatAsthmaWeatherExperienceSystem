import Header from "../components/Header";
import UpdateProfile from "../components/UpdateProfile";

export default function UpdateProfilePage() {
  return (
    <div className="min-h-full h-screen mobile:w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="mobile:w-full space-y-8">
        <Header
          heading="Update Profile Details"
          paragraph="Don't have anything to update? "
          linkName="Return"
          linkUrl="/dashboard"
        />
        <UpdateProfile />
      </div>
    </div>
  );
}
