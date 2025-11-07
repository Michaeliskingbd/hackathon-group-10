import React from "react";

const team = [
  {
    name: "Brandon Rodriguez",
    role: "Full-Stack Developer",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Emily Cooper",
    role: "Full-Stack Developer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Michael Davis",
    role: "Full-Stack Developer",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Samantha Lee",
    role: "Full-Stack Developer",
    img: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    name: "William Thompson",
    role: "Full-Stack Developer",
    img: "https://randomuser.me/api/portraits/men/79.jpg",
  },
  {
    name: "Ashley Williams",
    role: "Full-Stack Developer",
    img: "https://randomuser.me/api/portraits/women/72.jpg",
  },
];

const Team = () => (
  <section className="bg-gray-50 py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-12">Our Team</h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
        {team.map((member, i) => (
          <div key={i}>
            {/* Full-width portrait image card */}
            <div className="w-full h-96 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Separate name and role */}
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="text-indigo-600 font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
