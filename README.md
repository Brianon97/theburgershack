# theburgershack

<img width="1024" height="1024" alt="logo theburgershack" src="https://github.com/user-attachments/assets/57dcac0a-bfb1-4105-9b4c-cc0e4d47633c" />

<h2>Table of Contents</h2>
<ul>
  <li><a href="#pv">Website Preview</a></li>
  <li><a href="#web">Link to Live Website</a></li>
  <li><a href="#userstories">User Stories</a></li>
  <li><a href="#uxdesign">UX Design</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#deployment">Deployment / Dependencies</a></li>
  <li><a href="#ai">AI Implementation</a></li>
  <li><a href="#tv">Testing and Validation</a></li>
  <li><a href="#references">References / External Links</a></li>
  <li><a href="#credits">Credits</a></li>
</ul>


<h2 id ="pv"> Website Preview</h2>

<img width="816" height="717" alt="Screenshot 2025-10-02 225805" src="https://github.com/user-attachments/assets/6676bdd3-c498-4c7d-8ddd-f7d48358b0f7" />

<img width="842" height="710" alt="Screenshot 2025-10-02 225822" src="https://github.com/user-attachments/assets/14fc09cc-1fbb-4622-91e5-4033e61c5a6d" />
<img width="1515" height="703" alt="Screenshot 2025-10-02 225959" src="https://github.com/user-attachments/assets/314ac9a5-a307-43c1-8d76-f32453fd7eec" />

<img width="1412" height="827" alt="Screenshot 2025-10-02 230420" src="https://github.com/user-attachments/assets/d6be79ca-6112-44b7-9a21-3385e3b596c0" />

<h2 id= "web"> Link to Live website </h2>

https://brianon97.github.io/theburgershack/

<h2>Introduction</h2>

The Burger Shack Website is a responsive, user-friendly web application designed to promote The Burger Shack, a fictional restaurant located at Marina Market Dockland, Cork, Ireland. The site showcases the restaurant’s offerings, including smash burgers, Italian-style pizzas, and meal deals, with a focus on fresh ingredients and customer satisfaction. It provides a platform for customers to explore deals, contact the restaurant, and engage with its social media presence. Built using HTML, CSS, and Bootstrap, the website ensures accessibility and a seamless experience across devices.



<h2 id="userstories">User Stories</h2>

- As a customer, I want to view meal deals and student offers, so I can choose affordable dining options.
- As a potential employee, I want to access a careers form, so I can apply for jobs at The Burger Shack.
- As a visitor, I want to find the restaurant’s location and contact details, so I can visit or reach out easily.
- As a student, I want to see student-specific deals, so I can save money on meals.
- As a social media user, I want to access The Burger Shack’s social media pages, so I can stay updated on offers and promotions.

<h2 id="uxdesign">The UX design</h2>

<h3>Wireframes: </h3>
- The layout includes a navbar, carousel for food images, and a footer with contact and form sections.
<img width="1157" height="1079" alt="Screenshot 2025-10-03 114611" src="https://github.com/user-attachments/assets/a684d2a4-9efc-4a9d-bdf2-16687a91eb77" />

<img width="1102" height="1077" alt="Screenshot 2025-10-03 114626" src="https://github.com/user-attachments/assets/58b6ba7e-ad73-42d3-94ea-e55658c63da9" />

<h3>Design Principles:</h3>

<h4>Responsiveness:</h4>
- Bootstrap’s grid system ensures compatibility across mobile, tablet, and desktop devices.
- Accessibility: ARIA labels (e.g., for social media links and carousel controls) and form validation enhance usability for screen readers.
- Visual Style: Uses a bold color scheme (orangered, black, and white) with Baskerville font for a aesthetics.


<h4>User Flow:</h4>

- Homepage: Features a carousel of dishes (burgers, pizzas, nachos, etc.) and a welcome message.
- Deals Page: Displays meal deals with consistent card layouts for easy comparison.
- Footer: Includes contact info, a Google Maps embed, and a contact form.


<h4>CSS Customizations:</h4>

- Hover effects on buttons (e.g., #button transitions from orange red to black with orangered border and orangered text).
- Social media icons have distinct borders (e.g., pink for Instagram, blue for Facebook).
- Responsive card heights ensure uniformity across devices (e.g., min-height: 500px for tablets and up).



<h4>Tools Used:</h4>
HTML, CSS, and Bootstrap for structure and styling and balsamic for wireframes.

<h2 id="features">Features</h2>

- Navigation Bar: A dark-themed, responsive navbar with links to Home, Deals/Student Deals, Careers, and Contact Us.
- Image Carousel: Displays six food items (e.g., smash burgers, loaded fries, Italian-style pizza) with autoplay and navigation controls.
- Deals Page: Lists meal deals for individuals, groups, and students, with prices (e.g., €10 for a single meal deal, €50 for a group bundle).
- Contact Form: Allows users to submit inquiries or job applications with fields for first name, last name, subject (e.g., booking, careers), message, and date.
- Social Media Integration: Links to Instagram, Facebook, and X with branded icons.
- Location Map: Embedded Google Maps iframe showing The Burger Shack’s location at Marina Market, Cork.
- Footer: Centralized contact info, including address, phone (021 427 6789), and email (info@theburgershack.com).

<h3>Future Features (Planned):</h3>

- Menu Items page for detailed food listings.
- Shopping Cart for online ordering.

<h2 id="deployment">Deployment:</h2>

This project was created with vs code. Within the terminal of vs code initiated a repo to link with github. From github  follow the steps below.

Step 1 - Create a folder in your local directory/computer/storage.

- Create a folder on your device Eg theBurgerShack
- Return to vs code open the folder add your folders eg html assets/images/css then go to the terminal.

Step 2 - Go to vs code terminal

- Initialize Git with -	git init
- Stage all files with       git add .
- Commit	git commit -m "Initial commit for The Burger Shack website"

Step 3 - Go to Github

- Navigate to create a new repository.
- Name the repository : theburgershack
- Add description: “The Burger Shack website project”
- Select visibility: choose Public
- ⚠️ Don’t add a README, .gitignore, or license (you already have local files).
- Click Create repository.

- On the next page, GitHub will show the commands to connect your local repo — keep that tab open that you can copy and paste into your vs code terminal.

Step 4 - Return to vs code

- Rename branch	git branch -M main
- Add remote	git remote add origin https://github.com/brianon97/theburgershack.git
- Push to GitHub	git push -u origin main

Step 5 - Return to github 

- Goto Settings → Pages
- Go to Deploy to Pages
- Under “Build and deployment”, set:
Source: Deploy from a branch
Branch: main
Folder: / (root) (if your index.html is in the main folder)

- Click Save.

- Wait a few minutes, return to the code in the repository, click refresh and navigate the the right side of the page under deployment to see the website deployment link.



<h3>Frontend:</h3>

- Bootstrap 5.3.3 (CSS and JS) for responsive design and components (navbar, carousel, cards).
- Font Awesome (kit: 3b20d96fa9) for icons (e.g., location pin, phone, envelope).


<h3>Custom CSS: </h3>

- Style.css for styling (e.g., orangered footer, Baskerville font, hover effects).
- Assets: Images for logo, food items, and social media icons stored in assets/images/.
- No Backend: The site is static, with form submissions redirecting to a placeholder submit.html.

<h2 id="ai">AI Implementation</h2>

- No AI is integrated into the website, as it focuses on static content and user interaction.

<h3>Potential AI Features:</h3>

Chatbot: Integrate to answer questions about menu items or deals.
Recommendation System: Use AI to suggest meal deals based on user preferences (requires backend integration).

<h2 id="tv">Testing and Validation</h2>


<h3>Unit Testing:</h3>

<img width="1915" height="929" alt="Screenshot 2025-10-03 115747" src="https://github.com/user-attachments/assets/9e03d82e-ada5-4bcb-922d-719e34c8705d" />


<img width="1915" height="929" alt="Screenshot 2025-10-03 115747" src="https://github.com/user-attachments/assets/5cecfa89-74ba-4112-bccc-97032315afe4" />

Tested HTML and CSS for syntax errors using W3C validators.
Verified form validation (e.g., required fields for first name, last name, and date).

<h3>Performance testing:</h3>
Tested performance, accessability , best bractices and seo with Chrome Dev tool PageSpeed Insights.

<img width="1908" height="795" alt="Screenshot 2025-10-03 124126" src="https://github.com/user-attachments/assets/3567a5c0-96da-4c3b-b7de-3ffaf11939f0" />

<img width="1878" height="810" alt="Screenshot 2025-10-03 124142" src="https://github.com/user-attachments/assets/065d7771-1dd3-4a31-8e11-0c38fd392436" />

<img width="1497" height="744" alt="Screenshot 2025-10-03 124255" src="https://github.com/user-attachments/assets/ecc362a6-bfca-4561-8768-b7839b80d00b" />

<img width="1395" height="734" alt="Screenshot 2025-10-03 124228" src="https://github.com/user-attachments/assets/a4ad9743-c33a-4cf8-a370-7573bd1531d2" />

<h3>Integration Testing:</h3>

- Confirmed navbar collapse functionality on mobile devices using Bootstrap’s toggler.
- Tested carousel autoplay and manual controls across browsers (e.g., Chrome, Firefox).


<h3>User Acceptance Testing (UAT):</h3>

- Ensured links (e.g., social media, contact form) are functional and redirect correctly.
- Validated map iframe displays the correct location (Marina Market, Cork).


<h3>Responsive Testing:</h3>

- Used browser developer tools to test layouts on mobile (min-width: 768px), tablet (992px), and desktop (1200px+).
- Verified consistent card heights on the Deals page across screen sizes.

<h3>Issues Identified:</h3>

- Placeholder submit.html for form submission is not implemented.
- I frames class showign error for google map(if correct then shows the wrong location)

<h2 id ="references">References / External Links</h2>

- Bootstrap Documentation: https://getbootstrap.com/docs/5.3/ for navbar, carousel, and card components.
- Font Awesome: https://fontawesome.com/ for icons.
- Google Maps Embed: https://www.google.com/maps for location iframe.
- W3C Validator: https://validator.w3.org/ for HTML/CSS validation.
<h4>Social Media:</h4>

- Instagram: https://www.instagram.com
- Facebook: https://www.facebook.com
- X: https://www.x.com

<h2 id="credits">Credits</h2>

- Developer: [Brain O'Neill] (HTML, CSS, and Bootstrap implementation).

- Designer: [Brian O'Neill] (custom CSS styling and layout).








