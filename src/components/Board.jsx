import React from 'react';
import Card from './Card';

const todoCards = [
  {
    title: 'Brainstorming',
    priority: 'Low',
    description: "Brainstorming brings team members’ diverse experience into play.",
    comments: 12,
    files: 0,
    avatars: ['https://i.pravatar.cc/30?img=12', 'https://i.pravatar.cc/30?img=13', 'https://i.pravatar.cc/30?img=14'],
  },
  {
    title: 'Research',
    priority: 'High',
    description: 'User research helps you to create an optimal product for users.',
    comments: 10,
    files: 3,
    avatars: ['https://i.pravatar.cc/30?img=15', 'https://i.pravatar.cc/30?img=16'],
  },
  {
    title: 'Wireframes',
    priority: 'High',
    description: 'Low fidelity wireframes include the most basic content and visuals.',
    comments: 8,
    files: 0,
    avatars: ['https://i.pravatar.cc/150?img=3'],
  },
];

const onProgressCards = [
  {
    title: 'Onboarding Illustrations',
    priority: 'Low',
    image: 'https://freeillustrations.xyz/wp-content/uploads/2020/07/Onboarding-illustrations@4x.png',
    comments: 14,
    files: 15,
  },
  {
    title: 'Moodboard',
    priority: 'Low',
    image: 'https://images.ctfassets.net/w6r2i5d8q73s/3YU4WzQzAda7UTKTvyVHYg/920d988e9608a7d17ca36f287326e916/small_card_brainstorming_product_image_EN_small_3_2_2x.png',
    comments: 9,
    files: 10,
  },
];

const doneCards = [
  {
    title: 'Mobile App Design (Completed)',
    comments: 12,
    files: 15,
    image: 'https://assets.justinmind.com/wp-content/uploads/2022/06/mobile-app-templates-justinmind-768x492.png',
  },
  {
    title: 'Design System (Completed)',
    description: 'It just needs to adapt the UI from what you did before.',
    comments: 15,
    files: 10,
  },
];

export default function Board() {
  return (
    <section className="board-container">
      <div className="board-column to-do">
        <div className="board-header">
          <div className="header-indicator purple"></div>
          <h3>To Do</h3>
          <button className="add-btn">+</button>
        </div>
        {todoCards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>

      <div className="board-column on-progress">
        <div className="board-header">
          <div className="header-indicator orange"></div>
          <h3>On Progress</h3>
        </div>
        {onProgressCards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>

      <div className="board-column done">
        <div className="board-header">
          <div className="header-indicator green"></div>
          <h3>Done</h3>
        </div>
        {doneCards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </section>
  );
}
