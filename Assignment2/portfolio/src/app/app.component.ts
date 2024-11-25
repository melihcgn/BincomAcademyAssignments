import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // Ensure this is marked as a standalone component
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Portfolio';

  aboutMe = 'As a recent Computer Engineering graduate from Sabancı University, I have developed a strong foundation in frontend development with extensive experience in React, Next.js, TailwindCSS, and CSS. During my internship at Dresden Vision, I worked independently on a project, enhancing my skills in web development and problem-solving. Additionally, I have experience as a game manager and developer at a startup. In my spare time, I have been developing a game project, focusing on scalability and code quality. I am passionate about creating efficient and user-friendly applications and am actively seeking new opportunities to leverage my skills in a dynamic and collaborative environment. Beyond software projects, I am eager to explore areas such as AI, machine learning, and automation, where I can apply my problem-solving skills and contribute to cutting-edge technologies. Let\'s connect and discuss how I can contribute to your team\'s goals and explore innovative solutions together.';
  projects = [
    { name: 'Pathability', description: 'Championed a React-based web-dev project focused on creating accessible map application.', link: '#' },
    { name: 'Lightbulb', description: 'Advocated a Flutter-based mobile-dev Project about a social app like Instagram.', link: '#' },
    { name: 'Drugland', description: 'Managed to a MySQL based Web-dev Project about a website aiming to carry sales of medical drugs to free-market through a website. ', link: '#' },
    { name: 'Myth Party', description: 'Working on a C#-based party game project using mythical objects and human psychology on Unity. Currently in alpha stage. ', link: '#' },
    { name: 'Research on Femicides in Turkey', description: 'Programmed web scraping, data visualization and data cleaning codes using Python.', link: '#' }  
  ];
  contact = {
    email: 'melihcaganari@gmail.com',
    phone: '+90 553 346 6849',
    linkedin: 'https://www.linkedin.com/in/melihcaganari/'
  };
}
