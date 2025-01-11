// <-------------------------NAV_BAR_STARTED----------------------->

function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");
  const lines = document.querySelectorAll(".line");

  if (mobileMenu.style.transform === "translateX(0%)") {
    mobileMenu.style.transform = "translateX(-100%)";
    lines[0].style.transform = "rotate(0)";
    lines[1].style.opacity = "1";
    lines[2].style.transform = "rotate(0)";
  } else {
    mobileMenu.style.transform = "translateX(0%)";
    lines[0].style.transform = "rotate(45deg)";
    lines[1].style.opacity = "0";
    lines[2].style.transform = "rotate(-45deg)";
  }
}

// <-------------------------NAV_BAR_ENDED----------------------->

// <-------------------------CURSOR_EFFECT_STARTED----------------------->

const glowEffect = document.getElementById("gloweffect");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY-40;

  // Update the position of the glow effect
  glowEffect.style.left = `${x}px`;
  glowEffect.style.top = `${y}px`;
});

// <-------------------------CURSOR_EFFECT_ENDED----------------------->


// <------------------------DataSet for Blogs-------------------------->

const blogPosts = [
  {
    id: 10,
    title: "The Future of Web Development",
    summary: "A deep dive into the technologies shaping the future of web development.",
    topic: "Web Development",
    detailedDescription: "Web development is constantly evolving with new technologies and frameworks. In this post, we explore the cutting-edge trends like Progressive Web Apps (PWAs), AI integration in development, and the rise of serverless architectures.",
    author: "Jane Doe",
    publicationDate: "2025-01-10",
    imageURL: "image10",
    tags: ["Web Development", "Tech Trends", "Future", "AI", "Serverless"],
    commentsCount: 24,
    isFeatured: true,
    readTime: "8 min",
    language: "English",
  },
  {
    id: 9,
    title: "Mastering JavaScript in 2025",
    summary: "Everything you need to know about mastering JavaScript in the modern web development landscape.",
    topic: "JavaScript",
    detailedDescription: "JavaScript continues to be a dominant language in web development. This article walks you through the latest features, best practices, and resources to become proficient in JavaScript by 2025, including async/await, ES modules, and new frameworks.",
    author: "John Smith",
    publicationDate: "2025-01-08",
    imageURL: "image9",
    tags: ["JavaScript", "Web Development", "Tutorial", "Programming"],
    commentsCount: 15,
    isFeatured: false,
    readTime: "10 min",
    language: "English",
  },
  {
    id: 8,
    title: "Introduction to React in 2025",
    summary: "A beginner's guide to understanding React and its new features in 2025.",
    topic: "React",
    detailedDescription: "React continues to dominate the front-end development world. In this post, we cover React's key features, including hooks, context API, and React Server Components, while also exploring the best practices for building scalable applications.",
    author: "Emily White",
    publicationDate: "2025-01-05",
    imageURL: "image8",
    tags: ["React", "JavaScript", "Frontend", "Web Development"],
    commentsCount: 42,
    isFeatured: true,
    readTime: "12 min",
    language: "English",
  },
  {
    id: 7,
    title: "Exploring Artificial Intelligence in Web Development",
    summary: "How AI is revolutionizing the way we build and interact with websites.",
    topic: "Artificial Intelligence",
    detailedDescription: "Artificial intelligence is beginning to play a significant role in web development. From chatbots to AI-powered design systems, this article discusses the ways AI is enhancing user experience, improving automation, and aiding in decision-making processes in web development.",
    author: "Michael Green",
    publicationDate: "2025-01-02",
    imageURL: "image7",
    tags: ["Artificial Intelligence", "Web Development", "AI", "Tech Trends"],
    commentsCount: 30,
    isFeatured: false,
    readTime: "9 min",
    language: "English",
  },
  {
    id: 6,
    title: "The Rise of Serverless Architecture",
    summary: "Why serverless is becoming a key player in modern software development.",
    topic: "Serverless Architecture",
    detailedDescription: "Serverless architecture is changing the way developers think about infrastructure. In this post, we explore the benefits of going serverless, including cost efficiency, scalability, and faster development cycles. We also dive into the challenges and best practices for implementing serverless architectures.",
    author: "Sarah Brown",
    publicationDate: "2025-01-01",
    imageURL: "image6",
    tags: ["Serverless", "Cloud", "Software Architecture", "Tech Trends"],
    commentsCount: 18,
    isFeatured: false,
    readTime: "7 min",
    language: "English",
  },
  {
    id: 5,
    title: "Building Scalable APIs with Node.js",
    summary: "How to design and implement scalable APIs using Node.js.",
    topic: "Backend Development",
    detailedDescription: "Node.js is a powerful platform for building scalable APIs. In this post, we break down the steps for creating RESTful APIs using Node.js, focusing on performance optimization, security best practices, and integrating databases like MongoDB and PostgreSQL.",
    author: "David Lee",
    publicationDate: "2025-01-07",
    imageURL: "image5",
    tags: ["Node.js", "Backend", "APIs", "Web Development", "JavaScript"],
    commentsCount: 26,
    isFeatured: true,
    readTime: "10 min",
    language: "English",
  },
  {
    id: 4,
    title: "Building Cross-Platform Apps with Flutter",
    summary: "A complete guide to creating mobile apps with Flutter for both iOS and Android.",
    topic: "Mobile Development",
    detailedDescription: "Flutter is a popular framework for building cross-platform mobile applications. This guide covers the basics of setting up a Flutter project, designing a simple UI, and deploying to both iOS and Android platforms, all while maintaining a smooth user experience.",
    author: "Olivia Harris",
    publicationDate: "2025-01-04",
    imageURL: "image4",
    tags: ["Flutter", "Mobile Development", "Cross-Platform", "Apps"],
    commentsCount: 19,
    isFeatured: false,
    readTime: "11 min",
    language: "English",
  },
  {
    id: 3,
    title: "Understanding Cloud Computing for Developers",
    summary: "A breakdown of cloud computing essentials and why developers should care.",
    topic: "Cloud Computing",
    detailedDescription: "Cloud computing offers flexibility, scalability, and cost savings for developers and businesses. In this post, we explore the different cloud services (IaaS, PaaS, SaaS) and their benefits, with examples of popular cloud providers like AWS, Google Cloud, and Azure.",
    author: "Chris Martin",
    publicationDate: "2025-01-03",
    imageURL: "image3",
    tags: ["Cloud", "Cloud Computing", "Developer Tools", "Tech Trends"],
    commentsCount: 33,
    isFeatured: false,
    readTime: "6 min",
    language: "English",
  },
  {
    id: 2,
    title: "Optimizing Frontend Performance with Lazy Loading",
    summary: "Learn how lazy loading can improve the performance of your website.",
    topic: "Frontend Development",
    detailedDescription: "Lazy loading is a technique used to delay the loading of resources until they are needed. This article explains how lazy loading can significantly improve the performance of your website, reduce initial load times, and enhance user experience.",
    author: "Laura King",
    publicationDate: "2025-01-06",
    imageURL: "image2",
    tags: ["Frontend", "Performance", "Optimization", "Web Development"],
    commentsCount: 22,
    isFeatured: false,
    readTime: "7 min",
    language: "English",
  },
  {
    id: 1,
    title: "Getting Started with Docker and Containers",
    summary: "A beginner's guide to understanding Docker and how to use containers in development.",
    topic: "DevOps",
    detailedDescription: "Docker simplifies application deployment and scalability by using containers. This post is designed for beginners to understand the fundamentals of Docker, including how to set up a Docker environment, create containers, and deploy applications.",
    author: "Lucas Davis",
    publicationDate: "2025-01-09",
    imageURL: "image1",
    tags: ["Docker", "Containers", "DevOps", "Development"],
    commentsCount: 17,
    isFeatured: true,
    readTime: "8 min",
    language: "English",
  }
];

const cardContainer = document.getElementById("cardContainer");

function display(){
  cardContainer.innerHTML = "" ;
    blogPosts.forEach((obj) => {
      const card = document.createElement("div");
      card.className = "card";
  
      
      const cardInner = document.createElement("div");
      cardInner.className = "card-inner";
  
      const cardFront = document.createElement("div");
      cardFront.className = "card-front";
  
      const topic = document.createElement("h3");
      topic.innerHTML = obj.topic;
      cardFront.appendChild(topic);
  
      const title = document.createElement("h6");
      title.innerHTML = obj.title;
      cardFront.appendChild(title);
  
      const summary = document.createElement("p");
      summary.className = "summary";
      summary.innerHTML = obj.summary;
      cardFront.appendChild(summary);
  
      const cardBack = document.createElement("div");
      cardBack.className = "card-back";
  
      const detailedDescription = document.createElement("p");
      detailedDescription.className = "description";
      detailedDescription.innerHTML = obj.detailedDescription;
      cardBack.appendChild(detailedDescription);
  
      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
  
      card.appendChild(cardInner);
  
      card.addEventListener("mouseover", () => {
        const image = document.createElement("img");
        image.src = `./${obj.imageURL}.jpg`;
        image.alt = obj.title;
        image.style.width = "100%";
  
        cardFront.innerHTML = ""; 
        cardFront.appendChild(image); 
      });
      
      card.addEventListener("mouseout", () => {
        
        cardFront.innerHTML = ""; 
        cardFront.appendChild(topic);
        cardFront.appendChild(title); 
        cardFront.appendChild(summary);
      });
  
     
      cardContainer.appendChild(card);
    });
  }

window.addEventListener("load", display()) ;

  const createbutton = document.createElement("button");
  const buttonDiv = document.getElementById("createButton");
  createbutton.className = "creationButton";
  createbutton.id = "blogCreationButton" ;
  createbutton.style.height = "2rem";
  createbutton.style.width = "8rem";
  createbutton.style.borderRadius = "10px";
  createbutton.innerHTML = "Create Blog";
  buttonDiv.appendChild(createbutton);

  createbutton.addEventListener(("click") , ()=>{
    const Form = document.getElementById("form-container") ;
    Form.style.display = "block" ;

    const idInput = document.getElementById("blog-id") ;
    let arrlen = blogPosts.length + 1 ;
    idInput.setAttribute("placeholder" , `The ID Number is ${arrlen}`) ;

    // let arrlen = blogPosts.length + 1 ;
    // const text = document.createTextNode(`ID Number for This Blog Post is ${arrlen}`) ;
    // Form.appendChild(text) ;



  })

  const Form = document.getElementById("article-form") ;
  Form.addEventListener(("submit") , (event)=>{
    event.preventDefault() ;

    const data = new FormData(Form) ;

    let obj = {} ;
    for (let [key , value] of data.entries())
    {
      obj[key] = value ;
    }
    console.log(obj) ;

    blogPosts.unshift(obj) ;

    const FormDiv = document.getElementById("form-container") ;
    FormDiv.style.display = "none" ;
    console.log(blogPosts) ;
    Form.reset() ;
    display() ;

  })
  

