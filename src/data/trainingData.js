// ITUS (Indian Rescue Academy) - Structured Data

export const instructorInfo = {
  name: "Om Nagnath Sapar",
  role: "Rescue Trainer & Adventure Instructor",
  academy: "ITUS (Indian Rescue Academy)",
  tagline: "Training Future Rescue Professionals, Emergency Responders & Cadet Squads",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800", // Default placeholder, client can update later
  bio: "Om Nagnath Sapar is a dedicated Rescue Trainer at ITUS (Indian Rescue Academy) and an experienced adventure coach. With a background in Geography (M.Sc) and certification from the National Cadet Corps (NCC), he specializes in disaster response, tactical self-defense, martial weapons, and outdoor survival. He has actively trained rescue teams, student cadets, and community volunteers across Maharashtra, specializing in both emergency disaster response and adventurous survival skills.",
  skills: [
    "Disaster Response (Aapda Mitra)",
    "Lathi-Kathi Training",
    "Sword Fighting (Talwarbaji)",
    "Rifle Shooting Instruction",
    "Self-Defense & Physical Fitness",
    "Ziplining & Adventure Operations",
    "Team Building & Leadership Games",
    "Geography & Hazard Mapping",
    "First Aid & Emergency Care",
    "Civil Defense & Crowd Management"
  ]
};

export const impactStats = [
  { id: "trainees", label: "Trainees Trained", count: 1200, suffix: "+", color: "text-rescue-500" },
  { id: "districts", label: "Districts Covered", count: 6, suffix: "", color: "text-navy-500" },
  { id: "programs", label: "Training Camps", count: 45, suffix: "+", color: "text-rescue-500" },
  { id: "modules", label: "Skills Modules", count: 8, suffix: "", color: "text-navy-500" }
];

export const subjects = [
  {
    id: 1,
    title: "Disaster Response (Aapda Mitra)",
    icon: "ShieldAlert",
    description: "Core emergency preparedness, search & rescue drills, and community mobilization following official Aapda Mitra guidelines."
  },
  {
    id: 2,
    title: "Lathi-Kathi Training",
    icon: "Wind",
    description: "Traditional stick fighting techniques for physical coordination, reflex building, self-defense, and crowd control."
  },
  {
    id: 3,
    title: "Sword Fighting (Talwarbaji)",
    icon: "Ship", // Reused or alternate, we map to Anchor/Sword
    description: "Traditional swordsmanship training focusing on stance, agility, block maneuvers, and historic physical culture."
  },
  {
    id: 4,
    title: "Rifle Shooting",
    icon: "Activity",
    description: "Basic rifle safety rules, aiming principles, steady hold control, firing cadences, and target scoring."
  },
  {
    id: 5,
    title: "Self-Defense Techniques",
    icon: "HeartPulse",
    description: "Practical hand-to-hand combat drills, situational awareness, and special empowerment defense camps for women."
  },
  {
    id: 6,
    title: "Adventure Activities",
    icon: "UserCheck",
    description: "High-angle operations, ziplining mechanics, standard safety harness rigging, and artificial obstacle courses."
  },
  {
    id: 7,
    title: "Team Building Games",
    icon: "Users",
    description: "Cooperative group tasks, leadership challenges, communication drills, and character-building exercises."
  },
  {
    id: 8,
    title: "Disaster Risk Reduction",
    icon: "Flame",
    description: "Mitigation planning, local hazard vulnerability analysis, and community safety auditing."
  },
  {
    id: 9,
    title: "Physical Fitness & Run Coach",
    icon: "Activity",
    description: "Athletic conditioning, stamina build drills, running mechanics, led by a State-level Gold Medalist runner."
  }
];

export const activities = [
  {
    id: 1,
    title: "Aapda Mitra Disaster Drills",
    subtitle: "Emergency Response & Rescue Operations",
    description: "Simulating emergency events where participants learn search & rescue operations, victim assessment, initial aid, and coordination with local disaster response systems.",
    image: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?q=80&w=800&auto=format&fit=crop",
    tag: "Disaster Response"
  },
  {
    id: 2,
    title: "Traditional Lathi-Kathi Camps",
    subtitle: "Cultural Self-Defense & Fitness",
    description: "Intense physical training sessions teaching traditional stick handling, blocks, strikes, and coordination patterns to promote focus and personal defense skills.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop",
    tag: "Self-Defense"
  },
  {
    id: 3,
    title: "Ziplining & Adventure Camps",
    subtitle: "Outdoor Confidence & Rigging",
    description: "Conducting high-rope activities including zipline setups. Trainees master harness inspections, safety checks, structural load-bearing parameters, and self-confidence building.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    tag: "Adventure Ops"
  },
  {
    id: 4,
    title: "Women's Self-Defense Camps",
    subtitle: "Empowerment & Tactical Awareness",
    description: "Dedicated camps designed to teach escape tactics, verbal boundary enforcement, physical defense maneuvers, and building instant situational confidence.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    tag: "Self-Defense"
  },
  {
    id: 5,
    title: "Cadet Rifle & Agility Camps",
    subtitle: "Discipline, Precision & Aiming",
    description: "Introducing basic rifle safety, range etiquette, breathing rhythms, focus exercises, and obstacle agility courses suitable for student cadet corps.",
    image: "https://images.unsplash.com/photo-1473876613951-a1a1643b255b?q=80&w=800&auto=format&fit=crop",
    tag: "Tactical"
  },
  {
    id: 6,
    title: "Geography & Flood Hazard Mapping",
    subtitle: "Academic Disaster Preparedness",
    description: "Using Geography frameworks to study river behaviors, local flood contours, evacuation pathways, and mapping community assembly points during seasonal rain disasters.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    tag: "Mitigation"
  }
];

export const districtStats = [
  { name: "Solapur", trainings: 25, boys: 320, girls: 180, totalTrainees: 500 },
  { name: "Washim", trainings: 10, boys: 120, girls: 80, totalTrainees: 200 },
  { name: "Buldana", trainings: 5, boys: 90, girls: 60, totalTrainees: 150 },
  { name: "Wardha", trainings: 3, boys: 100, girls: 0, totalTrainees: 100 },
  { name: "Yavatmal", trainings: 2, boys: 70, girls: 30, totalTrainees: 100 },
  { name: "Wani", trainings: 2, boys: 98, girls: 0, totalTrainees: 98 }
];

export const galleryItems = [
  {
    id: 1,
    title: "Stick Defense Demonstration",
    subtitle: "Lathi Kathi Training",
    category: "Self-Defense",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop",
    description: "Training student groups in traditional sticks maneuvers."
  },
  {
    id: 2,
    title: "Zipline Canopy Launch",
    subtitle: "Adventure and Evacuation Camp",
    category: "Adventure Ops",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    description: "Trainees experiencing zip rescue and high-altitude operations."
  },
  {
    id: 3,
    title: "Aapda Mitra Rescue Course",
    subtitle: "Emergency Disaster Mitigation",
    category: "Disaster Response",
    image: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?q=80&w=800&auto=format&fit=crop",
    description: "Hands-on structural debris extraction practices."
  },
  {
    id: 4,
    title: "Rifle Shooting Alignment",
    subtitle: "Aiming and Stance Instruction",
    category: "Tactical",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    description: "Correcting aiming eye alignment and breathing styles."
  },
  {
    id: 5,
    title: "Women's Safety Tactics",
    subtitle: "Self-defense Workshop",
    category: "Self-Defense",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    description: "Teaching critical locks, holds, and swift escapes."
  },
  {
    id: 6,
    title: "Run Stamina Drill",
    subtitle: "Physical Conditioning camp",
    category: "Mitigation",
    image: "https://images.unsplash.com/photo-1473876613951-a1a1643b255b?q=80&w=800&auto=format&fit=crop",
    description: "Speed endurance drill led by State Running Gold Medalist."
  }
];

export const certifications = [
  {
    id: 1,
    title: "Aapda Mitra Disaster Responder",
    organization: "Disaster Management Authority",
    description: "Official governmental responder certificate authorizing community search, rescue, first aid support, and local disaster mitigation operations.",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df53f7eb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Disaster Risk Reduction Certificate",
    organization: "FPA India (Solapur Branch)",
    description: "Honored on International Day For Disaster Risk Reduction for active volunteer leadership and disaster relief preparedness workshops.",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "State Running Gold Medal",
    organization: "State Athletics Association",
    description: "Gold Medal achievement in State Level Running Competition, highlighting elite physical stamina, sprint coaching capabilities, and endurance.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800&auto=format&fit=crop"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Akash Shinde",
    role: "Adventure Camp Participant",
    rating: 5,
    feedback: "Om Sir's ziplining and rope safety instruction was top-notch. He explains safety checks so clearly that everyone felt completely secure. The team-building games were a great bonding experience."
  },
  {
    id: 2,
    name: "Sneha Patil",
    role: "Women's Self-Defense Attendee",
    rating: 5,
    feedback: "The 3-day self-defense camp organized by Om Sir was highly empowering. We learned practical moves using everyday items and built actual situational confidence. A must-attend for all girls!"
  },
  {
    id: 3,
    name: "Dr. R. K. Joshi",
    role: "FPA India Solapur Representative",
    rating: 5,
    feedback: "Om Nagnath Sapar has demonstrated exemplary dedication during our Disaster Risk Reduction events. His discipline, root understanding of geography, and leadership skills make him an outstanding trainer."
  }
];

export const contactDetails = {
  phone: "+91 8482933655",
  email: "saparom2000@gmail.com",
  address: "410, D Group, Vidi Gharkul, Hyderabad Road, Solapur, Maharashtra - 413005",
  socials: {
    facebook: "https://facebook.com/om.sapar",
    twitter: "https://twitter.com/om_sapar",
    linkedin: "https://linkedin.com/in/om-nagnath-sapar",
    youtube: "https://youtube.com/om_sapar"
  }
};

