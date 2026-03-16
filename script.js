

// ==================== ADMIN FUNCTIONS ====================

// Admin data storage
let adminData = {
  members: [],
  trainers: [],
  equipment: [],
  classes: [],
  gymInfo: {
    name: "FitZone Gym",
    address: "FC Road, Pune",
    phone: "+91 12345 67890",
    email: "info@fitzone.com",
    hours: {
      weekday: "5:00 AM - 11:00 PM",
      saturday: "6:00 AM - 9:00 PM",
      sunday: "7:00 AM - 8:00 PM",
      holiday: "8:00 AM - 6:00 PM",
    },
  },
};

// Show admin sections
window.showAdminSection = function (section) {
  document
    .querySelectorAll(".admin-section")
    .forEach((el) => el.classList.add("hidden"));
  document
    .getElementById(`admin-${section}-section`)
    .classList.remove("hidden");

  document
    .querySelectorAll(".sidebar-link")
    .forEach((link) => link.classList.remove("active"));
  event.target.closest(".sidebar-link").classList.add("active");

  // Load appropriate data
  if (section === "members") loadMembersData();
  if (section === "trainers") loadTrainersData();
  if (section === "equipment") loadEquipmentData();
  if (section === "classes") loadClassesData();
  if (section === "schedule") loadTimetable();
};

// Load members data
function loadMembersData() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const tbody = document.getElementById("membersTableBody");

  tbody.innerHTML = users
    .map(
      (user) => `
      <tr class="hover:bg-white/5 transition-colors">
        <td class="px-6 py-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
              ${user.firstName.charAt(0)}${user.lastName.charAt(0)}
            </div>
            <div>
              <p class="font-medium">${user.firstName} ${user.lastName}</p>
              <p class="text-xs text-zinc-500">${user.email}</p>
            </div>
          </div>
        </td>
        <td class="px-6 py-4">${user.plan}</td>
        <td class="px-6 py-4">${user.joinDate}</td>
        <td class="px-6 py-4">
          <span class="px-2 py-1 rounded text-xs font-medium bg-green-500/10 text-green-500">Active</span>
        </td>
        <td class="px-6 py-4">Today</td>
        <td class="px-6 py-4 text-right">
          <button class="text-zinc-500 hover:text-white mr-2">
            <iconify-icon icon="solar:pen-linear"></iconify-icon>
          </button>
          <button class="text-zinc-500 hover:text-[#ff2e00]">
            <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
          </button>
        </td>
      </tr>
    `,
    )
    .join("");

  // Update stats
  document.getElementById("totalMembers").textContent = users.length;
  document.getElementById("activeMembers").textContent = users.length;
}

// Load trainers data
function loadTrainersData() {
  const trainers = [
    {
      name: "Mike Chen",
      specialization: "HIIT/Cardio",
      experience: 5,
      classes: 8,
      rating: 4.8,
      status: "active",
    },
    {
      name: "Sarah Miller",
      specialization: "Yoga",
      experience: 7,
      classes: 10,
      rating: 4.9,
      status: "active",
    },
    {
      name: "Alex Thompson",
      specialization: "Strength",
      experience: 4,
      classes: 6,
      rating: 4.7,
      status: "active",
    },
    {
      name: "Emma Davis",
      specialization: "CrossFit",
      experience: 3,
      classes: 5,
      rating: 4.6,
      status: "active",
    },
  ];

  const tbody = document.getElementById("trainersTableBody");
  tbody.innerHTML = trainers
    .map(
      (trainer) => `
      <tr class="hover:bg-white/5 transition-colors">
        <td class="px-6 py-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
              ${trainer.name
                .split(" ")
                .map((n) => n.charAt(0))
                .join("")}
            </div>
            <span class="font-medium">${trainer.name}</span>
          </div>
        </td>
        <td class="px-6 py-4">${trainer.specialization}</td>
        <td class="px-6 py-4">${trainer.experience} years</td>
        <td class="px-6 py-4">${trainer.classes}</td>
        <td class="px-6 py-4">
          <div class="flex items-center gap-1">
            <iconify-icon icon="solar:star-bold" class="text-yellow-500"></iconify-icon>
            <span>${trainer.rating}</span>
          </div>
        </td>
        <td class="px-6 py-4">
          <span class="px-2 py-1 rounded text-xs font-medium bg-green-500/10 text-green-500">${trainer.status}</span>
        </td>
        <td class="px-6 py-4 text-right">
          <button class="text-zinc-500 hover:text-white mr-2">
            <iconify-icon icon="solar:pen-linear"></iconify-icon>
          </button>
          <button class="text-zinc-500 hover:text-[#ff2e00]">
            <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
          </button>
        </td>
      </tr>
    `,
    )
    .join("");

  document.getElementById("trainerCount").textContent = trainers.length;
  document.getElementById("activeTrainers").textContent = trainers.length;
}

// Load equipment data
function loadEquipmentData() {
  const equipment = [
    {
      name: "Treadmill",
      category: "Cardio",
      lastMaintained: "2024-01-15",
      nextService: "2024-02-15",
      status: "in-use",
      condition: "good",
    },
    {
      name: "Leg Press",
      category: "Strength",
      lastMaintained: "2024-01-10",
      nextService: "2024-02-10",
      status: "maintenance",
      condition: "needs-repair",
    },
    {
      name: "Dumbbells Set",
      category: "Free Weights",
      lastMaintained: "2024-01-20",
      nextService: "2024-02-20",
      status: "available",
      condition: "excellent",
    },
    {
      name: "Elliptical",
      category: "Cardio",
      lastMaintained: "2024-01-05",
      nextService: "2024-02-05",
      status: "in-use",
      condition: "good",
    },
  ];

  const tbody = document.getElementById("equipmentTableBody");
  tbody.innerHTML = equipment
    .map(
      (item) => `
      <tr class="hover:bg-white/5 transition-colors">
        <td class="px-6 py-4 font-medium">${item.name}</td>
        <td class="px-6 py-4">${item.category}</td>
        <td class="px-6 py-4">${item.lastMaintained}</td>
        <td class="px-6 py-4">${item.nextService}</td>
        <td class="px-6 py-4">
          <span class="px-2 py-1 rounded text-xs font-medium ${getStatusClass(item.status)}">${item.status}</span>
        </td>
        <td class="px-6 py-4">
          <span class="px-2 py-1 rounded text-xs font-medium ${getConditionClass(item.condition)}">${item.condition}</span>
        </td>
        <td class="px-6 py-4 text-right">
          <button class="text-zinc-500 hover:text-white mr-2">
            <iconify-icon icon="solar:pen-linear"></iconify-icon>
          </button>
          <button class="text-zinc-500 hover:text-[#ff2e00]">
            <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
          </button>
        </td>
      </tr>
    `,
    )
    .join("");

  document.getElementById("totalEquipmentCount").textContent = equipment.length;
  document.getElementById("equipmentInUseCount").textContent = equipment.filter(
    (e) => e.status === "in-use",
  ).length;
  document.getElementById("equipmentMaintenanceCount").textContent =
    equipment.filter((e) => e.status === "maintenance").length;
  document.getElementById("equipmentRepairCount").textContent =
    equipment.filter((e) => e.condition === "needs-repair").length;
}

// Load classes data
function loadClassesData() {
  const classes = [
    {
      name: "HIIT Cardio",
      trainer: "Mike Chen",
      day: "Monday",
      time: "09:00",
      duration: 60,
      capacity: 20,
      enrolled: 15,
    },
    {
      name: "Yoga Flow",
      trainer: "Sarah Miller",
      day: "Tuesday",
      time: "10:00",
      duration: 75,
      capacity: 15,
      enrolled: 12,
    },
    {
      name: "Strength Training",
      trainer: "Alex Thompson",
      day: "Wednesday",
      time: "17:00",
      duration: 90,
      capacity: 12,
      enrolled: 10,
    },
    {
      name: "CrossFit",
      trainer: "Emma Davis",
      day: "Thursday",
      time: "18:00",
      duration: 60,
      capacity: 15,
      enrolled: 8,
    },
  ];

  const tbody = document.getElementById("classesTableBody");
  tbody.innerHTML = classes
    .map(
      (cls) => `
      <tr class="hover:bg-white/5 transition-colors">
        <td class="px-6 py-4 font-medium">${cls.name}</td>
        <td class="px-6 py-4">${cls.trainer}</td>
        <td class="px-6 py-4">${cls.day}</td>
        <td class="px-6 py-4">${cls.time}</td>
        <td class="px-6 py-4">${cls.duration} min</td>
        <td class="px-6 py-4">${cls.capacity}</td>
        <td class="px-6 py-4">
          <div class="flex items-center gap-2">
            <span>${cls.enrolled}/${cls.capacity}</span>
            <div class="w-16 h-1.5 bg-zinc-800 rounded-full">
              <div class="h-full bg-[#ff2e00]" style="width: ${(cls.enrolled / cls.capacity) * 100}%"></div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 text-right">
          <button class="text-zinc-500 hover:text-white mr-2">
            <iconify-icon icon="solar:pen-linear"></iconify-icon>
          </button>
          <button class="text-zinc-500 hover:text-[#ff2e00]">
            <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
          </button>
        </td>
      </tr>
    `,
    )
    .join("");
}

// Load timetable
function loadTimetable() {
  const timetable = document.getElementById("weeklyTimetable");
  const timeSlots = [
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  timetable.innerHTML = timeSlots
    .map(
      (time) => `
      <div class="grid grid-cols-7 gap-2">
        ${Array(7)
          .fill(0)
          .map(
            () => `
          <div class="p-2 bg-[#0d0d0d] rounded text-center text-xs text-zinc-400 hover:bg-[#ff2e00]/10 hover:text-white transition-colors cursor-pointer">
            ${time}
          </div>
        `,
          )
          .join("")}
      </div>
    `,
    )
    .join("");
}

// Modal functions
window.openAddMemberModal = function () {
  document.getElementById("addMemberModal").classList.remove("hidden");
};

window.closeModal = function (modalId) {
  document.getElementById(modalId).classList.add("hidden");
};

// Update dashboard stats
function updateAdminDashboard() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  document.getElementById("totalMembers").textContent = users.length;
  document.getElementById("activeMembers").textContent = users.length;
  document.getElementById("lastUpdated").textContent =
    new Date().toLocaleString();

  // Recent members list
  const recentList = document.getElementById("recentMembersList");
  recentList.innerHTML = users
    .slice(0, 3)
    .map(
      (user) => `
      <div class="flex items-center justify-between p-3 bg-[#0d0d0d] rounded-lg">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
            ${user.firstName.charAt(0)}${user.lastName.charAt(0)}
          </div>
          <div>
            <p class="text-sm font-medium">${user.firstName} ${user.lastName}</p>
            <p class="text-xs text-zinc-500">Joined ${user.joinDate}</p>
          </div>
        </div>
        <span class="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded">New</span>
      </div>
    `,
    )
    .join("");
}

// Initialize admin data
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("admin-dashboard")) {
    updateAdminDashboard();
  }
});

// ==================== DATA STORAGE ====================
// Initialize local storage with sample data if empty
if (!localStorage.getItem("users")) {
  const sampleUsers = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      password: "password123",
      phone: "+1 234 567 8900",
      address: "123 Fitness St, NY",
      plan: "Pro",
      weight: 82.5,
      height: 180,
      joinDate: "2023-10-24",
      workouts: 47,
      hours: 42.5,
      calories: 12450,
      classes: [
        {
          name: "HIIT Cardio",
          day: "Monday",
          time: "09:00",
          instructor: "Mike",
          booked: true,
        },
        {
          name: "Upper Body Strength",
          day: "Wednesday",
          time: "17:00",
          instructor: "Sarah",
          booked: true,
        },
      ],
    },
  ];
  localStorage.setItem("users", JSON.stringify(sampleUsers));
}

// ==================== UTILITY FUNCTIONS ====================
window.toggleMobileMenu = function () {
  const menu = document.getElementById("mobile-menu");
  if (menu.classList.contains("max-h-0")) {
    menu.classList.remove("max-h-0", "opacity-0");
    menu.classList.add("max-h-96", "opacity-100");
  } else {
    menu.classList.remove("max-h-96", "opacity-100");
    menu.classList.add("max-h-0", "opacity-0");
  }
};

window.closeMobileMenu = function () {
  const menu = document.getElementById("mobile-menu");
  if (menu) {
    menu.classList.remove("max-h-96", "opacity-100");
    menu.classList.add("max-h-0", "opacity-0");
  }
};

// ==================== ROUTER ====================
window.router = function (pageId) {
  // Hide all pages
  document
    .querySelectorAll(".page-section")
    .forEach((el) => el.classList.remove("active"));

  // Show target page
  const target = document.getElementById(pageId);
  if (target) target.classList.add("active");

  // Handle navbar visibility
  const nav = document.getElementById("public-nav");
  if (nav) {
    if (pageId.includes("dashboard")) {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }

  closeMobileMenu();
  window.scrollTo(0, 0);
};

// ==================== DASHBOARD SECTION SWITCHING ====================
window.showDashboardSection = function (section) {
  // Hide all dashboard sections
  document
    .querySelectorAll(".dashboard-section")
    .forEach((el) => el.classList.add("hidden"));

  // Show selected section
  const selectedSection = document.getElementById(`dashboard-${section}`);
  if (selectedSection) selectedSection.classList.remove("hidden");

  // Update sidebar active state
  document
    .querySelectorAll(".sidebar-link")
    .forEach((link) => link.classList.remove("active"));
  event.target.closest(".sidebar-link").classList.add("active");
};

// ==================== REGISTER HANDLER ====================
document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const firstName = document.getElementById("regFirstName").value;
    const lastName = document.getElementById("regLastName").value;
    const email = document.getElementById("regEmail").value;
    const phone = document.getElementById("regPhone").value;
    const address = document.getElementById("regAddress").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;
    const plan = document.getElementById("regPlan").value;
    const weight = parseFloat(document.getElementById("regWeight").value);
    const height = parseFloat(document.getElementById("regHeight").value);

    // Validate passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      alert("User with this email already exists!");
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      address,
      password,
      plan,
      weight,
      height,
      joinDate: new Date().toISOString().split("T")[0],
      workouts: 0,
      hours: 0,
      calories: 0,
      classes: [],
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
    router("login");
  });

// ==================== LOGIN HANDLER ====================
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const role = document.querySelector('input[name="role"]:checked').value;

  if (role === "admin") {
    // Simple admin login (hardcoded for demo)
    if (email === "admin@fitzone.com" && password === "admin123") {
      router("admin-dashboard");
    } else {
      alert("Invalid admin credentials");
    }
    return;
  }

  // Member login
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Store current user in session
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    loadMemberDashboard(user);
    router("member-dashboard");
  } else {
    alert("Invalid email or password");
  }
});

// ==================== LOAD MEMBER DASHBOARD ====================
function loadMemberDashboard(user) {
  // Update welcome message
  document.getElementById("userFirstName").textContent = user.firstName;
  document.getElementById("welcomeMessage").textContent =
    `Let's crush your workout today, ${user.firstName}!`;
  document.getElementById("userInitials").textContent =
    user.firstName.charAt(0) + user.lastName.charAt(0);

  // Update membership info
  document.getElementById("userPlan").textContent = user.plan + " Plan";

  // Calculate BMI
  const heightInMeters = user.height / 100;
  const bmi = (user.weight / (heightInMeters * heightInMeters)).toFixed(1);
  document.getElementById("userWeight").innerHTML =
    `${user.weight} <span class="text-sm font-normal text-zinc-500">kg</span>`;
  document.getElementById("userBMI").innerHTML =
    `${bmi} <span class="text-sm font-normal ${getBMIClass(bmi)}" id="bmiCategory">${getBMICategory(bmi)}</span>`;

  // Update progress stats
  document.getElementById("totalWorkouts").textContent = user.workouts || 0;
  document.getElementById("totalHours").textContent = (user.hours || 0).toFixed(
    1,
  );
  document.getElementById("totalCalories").textContent = (
    user.calories || 0
  ).toLocaleString();

  // Update profile section
  document.getElementById("profileFullName").textContent =
    `${user.firstName} ${user.lastName}`;
  document.getElementById("profileEmail").textContent = user.email;
  document.getElementById("profilePhone").textContent =
    user.phone || "Not provided";
  document.getElementById("profileAddress").textContent =
    user.address || "Not provided";

  // Load schedule
  loadSchedule(user);

  // Set update form values
  document.getElementById("updateWeight").value = user.weight;
  document.getElementById("updateHeight").value = user.height;
}

// ==================== LOAD SCHEDULE ====================
function loadSchedule(user) {
  const todaysClasses = document.getElementById("todaysClasses");
  const upcomingClasses = document.getElementById("upcomingClasses");
  const availableClasses = document.getElementById("availableClasses");

  // Sample available classes
  const allClasses = [
    {
      name: "HIIT Cardio",
      day: "Monday",
      time: "09:00",
      instructor: "Mike",
      duration: "60 min",
    },
    {
      name: "Yoga Flow",
      day: "Tuesday",
      time: "10:00",
      instructor: "Sarah",
      duration: "75 min",
    },
    {
      name: "Upper Body Strength",
      day: "Wednesday",
      time: "17:00",
      instructor: "John",
      duration: "90 min",
    },
    {
      name: "CrossFit",
      day: "Thursday",
      time: "18:00",
      instructor: "Alex",
      duration: "60 min",
    },
    {
      name: "Lower Body Blast",
      day: "Friday",
      time: "08:00",
      instructor: "Emma",
      duration: "60 min",
    },
    {
      name: "Weekend Yoga",
      day: "Saturday",
      time: "09:00",
      instructor: "Sarah",
      duration: "75 min",
    },
  ];

  // Get today's day
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = days[new Date().getDay()];

  // Filter today's classes
  const todaysClassesList = allClasses
    .filter((c) => c.day === today)
    .slice(0, 2);

  todaysClasses.innerHTML = todaysClassesList.length
    ? todaysClassesList
        .map(
          (c) => `
          <div class="flex items-center justify-between p-3 bg-[#0d0d0d] rounded-lg border border-white/5">
            <div>
              <h4 class="font-medium">${c.name}</h4>
              <p class="text-xs text-zinc-500">${c.time} • ${c.instructor}</p>
            </div>
            <span class="text-xs bg-[#ff2e00]/10 text-[#ff2e00] px-2 py-1 rounded">Today</span>
          </div>
        `,
        )
        .join("")
    : '<p class="text-zinc-500 text-sm">No classes scheduled for today</p>';

  // Show upcoming classes (user's booked classes)
  upcomingClasses.innerHTML =
    user.classes && user.classes.length
      ? user.classes
          .map(
            (c) => `
          <div class="flex items-center justify-between p-3 bg-[#0d0d0d] rounded-lg border border-white/5 class-item">
            <div>
              <h4 class="font-medium">${c.name}</h4>
              <p class="text-xs text-zinc-500">${c.day} • ${c.time} • ${c.instructor}</p>
            </div>
            <span class="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded">Booked</span>
          </div>
        `,
          )
          .join("")
      : '<p class="text-zinc-500 text-sm">No classes booked yet</p>';

  // Show available classes to book
  availableClasses.innerHTML = allClasses
    .filter((c) => !user.classes?.some((bc) => bc.name === c.name))
    .slice(0, 3)
    .map(
      (c) => `
          <div class="flex items-center justify-between p-3 bg-[#0d0d0d] rounded-lg border border-white/5 class-item">
            <div>
              <h4 class="font-medium">${c.name}</h4>
              <p class="text-xs text-zinc-500">${c.day} • ${c.time} • ${c.instructor}</p>
            </div>
            <button onclick="bookClass('${c.name}', '${c.day}', '${c.time}', '${c.instructor}')" 
              class="text-xs bg-[#ff2e00] hover:bg-red-600 text-white px-3 py-1 rounded transition-colors">
              Book
            </button>
          </div>
        `,
    )
    .join("");
}

// ==================== BOOK CLASS ====================
window.bookClass = function (name, day, time, instructor) {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  if (!currentUser) return;

  const users = JSON.parse(localStorage.getItem("users"));
  const userIndex = users.findIndex((u) => u.id === currentUser.id);

  if (!users[userIndex].classes) users[userIndex].classes = [];

  // Check if already booked
  if (users[userIndex].classes.some((c) => c.name === name)) {
    alert("You already booked this class!");
    return;
  }

  users[userIndex].classes.push({ name, day, time, instructor, booked: true });
  localStorage.setItem("users", JSON.stringify(users));
  sessionStorage.setItem("currentUser", JSON.stringify(users[userIndex]));

  alert("Class booked successfully!");
  loadSchedule(users[userIndex]);
};

// ==================== UPDATE PROFILE ====================
document
  .getElementById("updateProfileForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    if (!currentUser) return;

    const newWeight = parseFloat(document.getElementById("updateWeight").value);
    const newHeight = parseFloat(document.getElementById("updateHeight").value);

    const users = JSON.parse(localStorage.getItem("users"));
    const userIndex = users.findIndex((u) => u.id === currentUser.id);

    users[userIndex].weight = newWeight;
    users[userIndex].height = newHeight;

    localStorage.setItem("users", JSON.stringify(users));
    sessionStorage.setItem("currentUser", JSON.stringify(users[userIndex]));

    alert("Profile updated successfully!");
    loadMemberDashboard(users[userIndex]);
  });

// ==================== HELPER FUNCTIONS ====================
function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

function getBMIClass(bmi) {
  if (bmi < 18.5) return "text-yellow-500";
  if (bmi < 25) return "text-green-500";
  if (bmi < 30) return "text-orange-500";
  return "text-red-500";
}

// ==================== LOGOUT HANDLER ====================
window.handleLogout = function () {
  if (confirm("Are you sure you want to logout?")) {
    sessionStorage.removeItem("currentUser");
    router("home");
  }
};

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", function () {
  // Set up mobile menu
  const menuBtn = document.getElementById("mobile-menu-btn");
  if (menuBtn) menuBtn.addEventListener("click", toggleMobileMenu);

  // Start at home
  router("home");

  // Check if user is already logged in
  const currentUser = sessionStorage.getItem("currentUser");
  if (currentUser) {
    loadMemberDashboard(JSON.parse(currentUser));
  }
});




