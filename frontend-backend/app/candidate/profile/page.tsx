"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Shubham Asati",
    email: "shubham.asati@email.com",
    bio: "Full Stack Developer | Machine Learning Enthusiast | Computer Engineering student at IIIT Pune.",
    location: "Pune, India",
  });

  const handleEditClick = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    // Save the profile details (implement logic)
    setEditing(false);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src="/path/to/profile-picture.jpg"
              alt="Profile Picture"
            />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <div>
            {editing ? (
              <Input
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                className="text-3xl font-semibold"
              />
            ) : (
              <h1 className="text-3xl font-semibold">{profile.name}</h1>
            )}
            <p className="text-gray-500">{profile.email}</p>
          </div>
        </div>
        <div>
          {editing ? (
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button variant="outline" onClick={handleEditClick}>
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">About</h2>
          {editing ? (
            <Textarea
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            />
          ) : (
            <p>{profile.bio}</p>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          {editing ? (
            <Input
              value={profile.location}
              onChange={(e) =>
                setProfile({ ...profile, location: e.target.value })
              }
            />
          ) : (
            <p>{profile.location}</p>
          )}
        </div>
      </div>

      {/* More Information */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="bg-white shadow p-4 rounded-lg">
          <p>
            <span className="font-semibold">Full Stack Developer</span> at
            Startup XYZ
          </p>
          <p className="text-gray-500">June 2023 - Present</p>
          <p className="mt-2">
            Working on cutting-edge web technologies to build scalable
            applications.
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">Education</h2>
        <div className="bg-white shadow p-4 rounded-lg">
          <p>
            <span className="font-semibold">
              B.Tech in Computer Engineering
            </span>
            - IIIT Pune
          </p>
          <p className="text-gray-500">2022 - 2026</p>
        </div>
      </div>
    </div>
  );
}
