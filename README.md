# **2-Week Plan: Building a Nuxt 4 Portfolio & Blog**

This plan will guide you through creating a complete portfolio website with a blog using Nuxt 4, Nuxt Content for your articles, and Nuxt Test Utils for testing.

### **Week 1: Foundations and Core Features**

**Day 1: ~~Project Setup & Basic Layout~~**

* **Goal:** Initialize your Nuxt 4 project and create the main layout.  
* **Tasks:**  
  1. Install the Nuxt CLI (`npx nuxi@latest init <project-name>`).
  2. Set up the project structure: create `components/`, `layouts/`, and `pages/` directories.  
  3. Create a default layout (`layouts/default.vue`) with a header (for navigation) and a footer.  
  4. Add basic navigation links (Home, About, Projects, Blog) in your header component.  
  5. Initialize a Git repository and make your first commit.

**Day 2: Static Pages (Home, About, Projects)**

* **Goal:** Build the main static pages of your portfolio.  
* **Tasks:**  
  1. Create the `pages/index.vue` (Homepage), `pages/about.vue`, and `pages/projects.vue` files.  
  2. Populate these pages with placeholder content and structure.  
  3. Create a reusable `<ProjectCard>` component to display individual projects.  
  4. Use static data (e.g., a simple array in your script) to list projects on the `/projects` page for now.

**Day 3: Introduction to Nuxt Content**

* **Goal:** Set up Nuxt Content and create your first blog post.  
* **Tasks:**  
  1. Install and configure the `@nuxt/content` module.  
  2. Create the `content/` directory.  
  3. Write your first blog post as a Markdown file (e.g., `content/blog/first-post.md`).  
  4. Learn about front-matter to add metadata (title, description, date) to your post.

**Day 4: Blog List & Individual Blog Post Pages**

* **Goal:** Display a list of all blog posts and view individual posts.  
* **Tasks:**  
  1. Create a `pages/blog/index.vue` page to list all blog articles. Use `queryContent()` to fetch and display them.  
  2. Create a dynamic page at `pages/blog/[...slug].vue` to render individual blog posts.  
  3. Use the `<ContentDoc />` component within the dynamic page to render the Markdown content.  
  4. Style the blog content for readability (headings, paragraphs, code blocks).

**Day 5: Styling with a CSS Framework**

* **Goal:** Integrate a CSS framework like Tailwind CSS for consistent styling.  
* **Tasks:**  
  1. Install and configure the `@nuxtjs/tailwindcss` module.  
  2. Apply utility classes to style your layout, pages, and components.  
  3. Focus on creating a clean, professional look for your portfolio and blog sections.  
  4. Ensure basic typography is set up in your `tailwind.config.js`.

**Day 6: Basic Component Testing**

* **Goal:** Set up the testing environment and write your first component test.  
* **Tasks:**  
  1. Install and configure `@nuxt/test-utils`.  
  2. Write a simple test for a presentational component, like your `<ProjectCard>` or footer.  
  3. Focus on mounting the component and asserting that it renders correctly without errors.

**Day 7: Review and Refactor**

* **Goal:** Clean up your code and prepare for week two.  
* **Tasks:**  
  1. Review all the code you've written this week.  
  2. Refactor any duplicated code into reusable components.  
  3. Ensure your file structure is logical and clean.  
  4. Commit all your changes to Git.

  ### **Week 2: Advanced Features & Deployment**

**Day 8: Internationalization (i18n)**

* **Goal:** Add multi-language support to your site with `@nuxtjs/i18n`.  
* **Tasks:**  
  1. Install and configure the `@nuxtjs/i18n` module.  
  2. Create translation files (e.g., `locales/en.json`, `locales/fr.json`) for UI strings like navigation links and footer text.  
  3. Refactor your static pages and layout components to use the translation functions provided by the module.  
  4. Create a language switcher component to allow users to change the locale.  
  5. Update your `content/` directory structure to support multiple languages (e.g., `content/en/blog/` and `content/fr/blog/`). Adjust content queries to fetch from the correct language directory.

**Day 9: Advanced Nuxt Content (Tags & Categories)**

* **Goal:** Add tagging and categorization to your blog.  
* **Tasks:**  
  1. Add `tags` and `category` fields to the front-matter of your blog posts in each language.  
  2. Update the blog list page (`pages/blog/index.vue`) to allow filtering by tag or category, respecting the current language.  
  3. Create dynamic pages like `pages/tags/[tag].vue` to display all posts for a specific tag.

**Day 10: SEO Basics & Meta Tags**

* **Goal:** Improve your site's Search Engine Optimization.  
* **Tasks:**  
  1. Use Nuxt's built-in `useHead` composable to set dynamic, localized page titles and meta descriptions for all pages.  
  2. Generate a `sitemap.xml` for your site. The `@nuxtjs/sitemap` module can help with multi-language sitemaps.  
  3. Add localized Open Graph tags for better social sharing.

**Day 11: Contact Form**

* **Goal:** Add a way for visitors to contact you.  
* **Tasks:**  
  1. Create a `pages/contact.vue` page with a contact form (Name, Email, Message).  
  2. Implement the form submission logic using a service like Formspree or Netlify Forms.  
  3. Add basic client-side validation for the form fields, with translated error messages.

**Day 12: More Testing**

* **Goal:** Write tests for more complex interactions and pages.  
* **Tasks:**  
  1. Write tests for your static pages (About, Projects) to ensure content is rendered.  
  2. Write a test that verifies your language switcher component works correctly.  
  3. Write a test for your contact form's validation logic.

**Day 13: Responsive Design & Final Polish**

* **Goal:** Ensure your website looks great on all devices.  
* **Tasks:**  
  1. Thoroughly test your site on different screen sizes (mobile, tablet, desktop).  
  2. Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) to fix any layout issues.  
  3. Add final touches like hover effects, transitions, and a custom 404 error page (`error.vue`).

**Day 14: Deployment**

* **Goal:** Prepare and get your website live on the internet.  
* **Tasks:**  
  1. Run `nuxi analyze` to inspect your bundle size and `nuxi generate` to pre-render your site.  
  2. Choose a hosting provider (Vercel or Netlify are great options).  
  3. Connect your Git repository, configure environment variables, and trigger a deployment.  
  4. Test the live site and celebrate your new portfolio\!  
  1. 
