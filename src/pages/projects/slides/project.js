const slides = [
    {
    title: 'Safwork',
    subtitle: 'Angular - SCSS',
    descriptionKey: 'desc_job',
    description:
      'Modern one-page React application with a sleek, responsive design and smooth scrolling.',
    data: '6.25',
    link: 'https://safwork.netlify.app/',
    image: 'jobang.png',
    gitlink: 'https://github.com/Safkiar/15_safwork_fe',
    onlygit: false,
  },
  {
    title: 'FlyFlow',
    subtitle: 'React - Django - CSS',
    descriptionKey: 'desc_trade',
    description:
      'Modern one-page React application with a sleek, responsive design and smooth scrolling.',
    data: '04.25',
    link: 'https://github.com/Safkiar/14-BE-FlyFlow-03.2025',
    image: 'construction.png',
    gitlink: 'https://github.com/Safkiar/14-BE-FlyFlow-03.2025',
    onlygit: true,
  },

  {
    title: 'Safizoo',
    subtitle: 'Angular - TypeScript - Java Spring - MySQL - SCSS',
    descriptionKey: 'desc_ecommerce',
    description:
      'fullstack e-commerce app where users can browse products, view details, and place orders. The application uses Angular SSR (Server-Side Rendering) for enhanced performance and SEO optimization on the frontend, while Spring Boot serves as the backend API connected to a MySQL database. Each part of the system is hosted individually and communicates seamlessly.',
    data: '12.24',
    link: 'https://one-safizoo-fullstack-angular-spring.onrender.com/products',
    image: 'safizoo.png',
    gitlink: 'https://github.com/Safkiar/13-BE-safizoo-12.2024',
    onlygit: false,
  },
  {
    title: 'Betangu',
    subtitle: 'Angular - TypeScript - Firebase - SCSS',
    descriptionKey: 'desc_bets',
    description:
      'Track bets with secure authentication. Users can add bets through a simple form, and the app calculates statistics and rankings to encourage friendly competition.',
    data: '11.24',
    link: 'https://betangu.netlify.app/',
    image: 'bet.png',
    gitlink: 'https://github.com/Safkiar/12-BetAngu-11.2024',
    onlygit: false,
  },
  {
    title: 'Safkiar  smooth scroling',
    subtitle: 'JavaScript - PUG - Webpack - SCSS',
    descriptionKey: 'desc_scroll',
    description:
      'Modern one-page React application with a sleek, responsive design and smooth scrolling.',
    data: '11.24',
    link: 'https://kikowski.netlify.app/',
    image: 'scroll.png',
    gitlink: 'https://github.com/Safkiar/10-kikowski-09.2024',
    onlygit: false,
  },
  {
    title: 'Animated Card',
    subtitle: 'JavaScript - PUG - Webpack - SCSS',
    descriptionKey: 'desc_card_preview',
    description:
      'It updates the card preview dynamically as the user types, including smooth flip animations when interacting with fields like the CVV. The setup provides a responsive, interactive experience for entering card details',
    data: '10.24',
    link: 'https://safkiar-animated-card.netlify.app/',
    image: 'card.png',
    gitlink: 'https://github.com/Safkiar/11-AnimatedCard-10.2024',
    onlygit: false,
  },
  {
    title: 'Smart Searching Tool',
    subtitle: 'React - Redux - TypeScript - Styled Components',
    descriptionKey: 'desc_data_filter',
    description:
      'React-Redux-based feature designed to help users filter and retrieve data efficiently from a table of user information',
    data: '09.24',
    link: 'https://smartst.netlify.app/',
    image: 'sst.png',
    gitlink: 'https://github.com/Safkiar/9-SmartST-09.2024',
    onlygit: false,
  },
  {
    title: 'Daily Quest',
    subtitle: 'React - Styled Components - Supabase',
    descriptionKey: 'desc_task_manager',
    description:
      'Manage their tasks and goals efficiently. Users can add and track quests that are daily, one-time, or recurring on specific days. The app also includes features for adding and editing notes, providing detailed information about each quest. Additionally, it offers a calendar view for an organized overview of upcoming tasks and progress tracking.',
    data: '08.24',
    link: 'https://dailyquest.netlify.app/dashboard',
    image: 'quest.png',
    gitlink: 'https://github.com/Safkiar/8-Daily-Quest-08.2024',
    onlygit: false,
  },
  {
    title: 'The Wild Oasis',
    subtitle: 'React - Styled Components - Supabase',
    descriptionKey: 'desc_booking_app',
    description:
      'The booking management app built with React, React Query, and Supabase offers comprehensive features including booking and cabin management with editable details. It provides real-time statistics and interactive charts, supports dark mode, and is fully responsive. User authentication and settings are securely handled through Supabase (course project)',
    data: '06.24',
    link: 'https://safkiar-the-wild-oasis.netlify.app/login',
    image: 'oasis.png',
    gitlink: 'https://github.com/Safkiar/7-the-wild-oasis-06.2024',
    onlygit: false,
  },
  {
    title: 'Well Schedule',
    subtitle: 'React - Styled Components - Firebase',
    descriptionKey: 'desc_event_manager',
    description:
      'User-friendly platform for managing events, allowing for detailed customization, such as setting occurrences for specific weeks of the month. Adding events is straightforward—just a simple click is required. The platform provides a clear view of your schedule with daily, weekly, and monthly calendar options.',
    data: '07.24',
    link: 'https://well-shedule.netlify.app/Weekly',
    image: 'well.png',
    gitlink: 'https://github.com/Safkiar/6-well-shedule-08.2024',
    onlygit: false,
  },
  {
    title: 'Fast React Pizza',
    subtitle: 'React - Tailwind',
    descriptionKey: 'desc_pizza_ordering',
    description:
      'Pizza ordering app, developed with Tailwind CSS, offers a seamless user experience for ordering pizza online.',
    data: '05.24',
    link: 'https://safkiar-fast-react-pizza.netlify.app/',
    image: 'pizza.png',
    gitlink: 'https://github.com/Safkiar/5-react-pizza-05.2024',
    onlygit: false,
  },
  {
    title: 'Mix React',
    subtitle: 'React - Styled Components',
    descriptionKey: 'desc_web_app',
    description:
      'dynamic web application that offers a variety of interface solutions. It encompasses a wide range of features such as informational cards, interactive quizzes, a finance management module resembling online banking, a currency converter facilitating quick calculations, as well as tools for handling dates',
    data: '05.24',
    image: 'mixreact.png',
    link: 'https://safkiar-mix-react.netlify.app/',
    gitlink: 'https://github.com/Safkiar/4-mix-react-05.2024',
    onlygit: false,
  },
  {
    title: 'Safkiar - first webpage',
    subtitle: 'JavaScript - CSS',
    descriptionKey: 'desc_personal_website',
    description:
      'My first personal website built using JavaScript, featuring smooth animations, translations, and interactive sliders.',
    data: '04.24',
    link: 'https://safkiar.github.io/3-safkiar-04.2024/',
    image: 'safkiar.png',
    gitlink: 'https://github.com/Safkiar/3-safkiar-04.2024',
    onlygit: false,
  },
  {
    title: 'MiniChess',
    subtitle: 'JavaScript - CSS',
    descriptionKey: 'desc_chess_variant',
    description:
      '6x8 chess variant that fully implements traditional rules—including castling, en passant, and pawn promotion—using a custom drag-and-drop system. I independently developed the advanced game logic to accurately handle these complex mechanics in a compact format',
    data: '03.24',
    link: 'https://safkiar.github.io/2-minichess-03.2024/',
    image: 'chess.png',
    gitlink: 'https://github.com/Safkiar/2-minichess-03.2024',
    onlygit: false,
  },
  {
    title: 'Forkify',
    subtitle: 'JavaScript - SCSS',
    descriptionKey: 'desc_recipe_finder',
    description:
      'Forkify is a recipe finder that fetches data from an external API, letting users search and save favorite dishes. Built with MVC, it offers a clean interface for easy culinary exploration.',
    data: '03.24',
    link: 'https://safkiar-forkify.netlify.app/',
    image: 'forkify.png',
    gitlink: 'https://github.com/Safkiar/1-forkify-03.2024',
    onlygit: false,
  },
];

export default slides;
