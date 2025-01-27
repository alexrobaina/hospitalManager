Here’s a clean and concise documentation with emojis to explain the repository structure and key concepts:

---

# 📚 **Hospital Manager Repository Documentation**

Welcome to the **Hospital Manager** repository! This is a web application designed to manage hospital patients effectively. Built using Vite.js, Tailwind CSS, React and TypeScript.

---

## 🏗 **Architecture Overview**

### **Root Directory**

- **`README.md`**: 📖 Comprehensive project documentation.
- **`eslint.config.js` & `.prettierrc`**: 🛠 Configuration files to maintain code quality and consistency.
- **`package.json`**: 📦 Dependency and script management.
- **`vite.config.ts`**: ⚡ Configuration for the Vite build tool.

---

### **`/public`**

📂 Static assets for the application (e.g., images, icons).

---

### **`/src`**

The core application logic resides here.

#### **Assets** 📂

- **`/icons`**: 🖼 Reusable React SVG icons.
- **`/images`**: 📷 Static image files.
- **`/lottie`**: 🎥 Lottie animations (e.g., `medicalRecord.json`).

#### **Components** ⚛️

Reusable components to build the UI:

- **`/common`**: 🌐 Shared components like `BaseButton`, `BaseInput`, and `Modal`.
- **`/Layout`**: 📐 Page layout wrapper.
- **`/Navbar` & `/Pagination`**: 🚀 Navigation and pagination utilities.

#### **Hooks** 🪝

Custom React hooks for API interactions:

- `useGetUsers` 🧑‍⚕️: Fetch a list of patients.
- `useCreateUser` ➕: Create a new patient.
- `useEditUser` ✏️: Edit existing patient details.
- `useDeleteUser` 🗑️: Delete a patient.

#### **Pages** 📄

Feature-specific pages for the app:

- **`HomePage`** 🏠: Landing page with animations and login modal.
- **`DashboardPage`** 📊: Overview of stats and trends.
- **`PatientListPage`** 📋: Manage and browse all patients.
- **`PatientPage`** 👤: Detailed view of an individual patient.

#### **Services** 🔧

Centralized application services like `AppContext` for state management and API utilities in `api/user.ts`.

#### **Types** 🗂

Shared TypeScript types (e.g., `User`).

---

## 🚀 **How to Run**

1. Clone the repository:
   ```bash
   git clone https://github.com/alexrobaina/hospitalManager.git
   cd hospitalManager
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm run dev
   ```

## 🔧 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier
- `pnpm run preview` - Preview production build

---

## 🎉 **Features**

- **CRUD Operations**: Manage patient records.
- **Interactive Dashboard**: View stats with charts.
- **Responsive Design**: Mobile-friendly UI.

## 🛠️ Tech Stack

- **Node:** 20.17.0
- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** MobX
- **Data Fetching:** React Query
- **Forms:** Formik + Yup
- **Routing:** React Router v7
- **Charts:** Recharts
- **Animations:**
  - Framer Motion
  - Lottie React
- **Notifications:** React Toastify

### 🎉 Happy coding! and enjoy the project! 🎉
