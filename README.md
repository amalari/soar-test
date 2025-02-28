# Project Soar Test: Achmad Jamaludin (Frontend Manager)

**Introduction**

This project is a React application built with Vite, designed to display user balance information, card details, transaction history, and charts. It fulfills the requirements outlined in the Front-End Manager Assessment Task document. This README provides setup instructions, an explanation of the technologies used, and assumptions made during development.


**Technologies Used**

* **React.js:** The primary framework for building the user interface.
* **Vite:** A build tool that provides a fast and efficient development experience.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development and consistent styling.
* **TanStack Query (useQuery):** A data-fetching library that simplifies asynchronous data management, caching, and state management for API requests.
    * **Why:** It improves data fetching efficiency, reduces boilerplate code, and provides built-in caching and error handling.
* **twMerge, clsx, and cva (Class Variance Authority):** Libraries for managing and composing Tailwind CSS classes.
    * **twMerge:** Prevents Tailwind CSS class conflicts, ensuring the correct styles are applied.
    * **clsx:** Conditionally applies CSS classes, making it easier to manage dynamic styling.
    * **cva:** Creates reusable component variants, enhancing design system consistency.
    * **Why:** These libraries streamline the management of Tailwind CSS classes, improving code maintainability and consistency.
* **Day.js:** A lightweight JavaScript library for parsing, validating, manipulating, and displaying dates and times.
    * **Why:** It simplifies date and time operations, providing a more efficient alternative to Moment.js.
* **React Datepicker:** A simple and customizable datepicker component for React.
    * **Why:** Provides a user-friendly interface for selecting dates, enhancing the user experience.
* **React Easy Crop:** A component for cropping images.
    * **Why:** Used for user profile image cropping, providing a visual and interactive way to manage images.
* **Valibot:** A schema validation library.
    * **Why:** Used for form validation, ensuring data integrity and providing clear error messages.
* **React Hook Form:** A performant and flexible form library for React.
    * **Why:** Simplifies form management, reduces boilerplate code, and integrates seamlessly with Valibot for validation.
* **Git:** Version control system for maintaining the project's codebase.


**Setup Instructions**

1.  **Clone the Repository:**
    ```bash
    git clone [repository-link]
    cd [project-directory]
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Run the Application:**
    ```bash
    npm run dev
    ```
4.  **Open in Browser:**
    * Open your browser and navigate to `http://localhost:5173`.


**Non-Functional Requirements**

* **Performance:** The application is optimized for performance using Vite's fast build process and lazy loading for components where applicable.
* **Accessibility:** Basic accessibility standards are adhered to, including ARIA labels and keyboard navigation.
* **Browser Compatibility:** The application is designed to work seamlessly across major browsers (Chrome, Firefox, Safari, Edge).


**Assumptions**

1.  **Dummy API Endpoints:**
    * The application relies on dummy API endpoints for data fetching. In a production environment, these would be replaced with actual API calls.
2.  **Static Data:**
    * Some data, such as user information and card details, is assumed to be static for the purpose of this assessment.
3.  **Simplified UI:**
    * The UI is designed to meet the basic requirements of the task. Additional styling and features could be added in a production environment.
4.  **No Authentication:**
    * This application does not implement user authentication. It assumes that the user is already authenticated.
5.  **No Backend:**
    * This application is designed to be a front-end demonstration. No backend is provided.


**Project Board and Issue Tracker**

As I am applying for the Frontend Manager position, task management is a critical area of focus. Therefore, in addition to concentrating on development, I have made a strong effort to effectively organize task separation through GitHub Projects and the Issue Tracker.

Please find the project and issue tracker links below for your review.
* [Project Link](https://github.com/jamaludin/soar-test/projects/1)
* [Issue Tracker Link](https://github.com/amalari/soar-test/issues)


**Vercel Live Demo Link** [Demo](https://achmad-soar-test.vercel.app/dashboard)


**Future Improvements**

* Implement actual API integration.
* Add more comprehensive unit and integration tests.
* Enhance UI/UX with more advanced features.
* Implement user authentication.
* Add more accessibility features.
* Add more responsive design rules.