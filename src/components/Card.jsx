import React from 'react';

export default function Card({
  title,
  priority,
  description,
  comments,
  files,
  avatars = [],
  image,
}) {
  return (
    <div className="card">
      {priority && (
        <div className={`priority priority-${priority.toLowerCase()}`}>
          {priority}
        </div>
      )}
      <h4 className="card-title">{title}</h4>
      {description && <p className="card-desc">{description}</p>}
      {image && <img className="card-image" src={image} alt={title} />}
      <div className="card-footer">
        <div className="avatars">
          {avatars.map((src, i) => (
            <img key={i} src={src} alt={`avatar-${i}`} className="avatar-small" />
          ))}
        </div>
        <div className="comments-files">
          <span>{comments} comments</span> • <span>{files} files</span>
        </div>
      </div>
    </div>
  );
}
